// Import required packages
import express from "express";       // Express framework for creating server
import axios from "axios";          // Axios for making HTTP API requests

// Create Express app
const app = express();
const port = 3000;         // Server will run on port 3000

// Middleware to parse form data (from POST requests)
app.use(express.urlencoded({extended:true}));

// Middleware to serve static files (CSS, images, etc.) from "public" folder
app.use(express.static("public"));

// Set EJS as template/view engine
app.set("view engine","ejs");

// ======================
// GET ROUTE - Home Page
// ======================

app.get("/", (req,res) =>{
   // Render index.ejs with default values
    res.render("index.ejs",{
       cryptoData : null,
       cryptoChange:null,
       cryptoName:null,
       error:null,
    });
});

// ==============================
// POST ROUTE - Check Crypto Price
// ==============================

app.post("/check-price", async (req,res) =>{
   // Get crypto name from form input and convert to lowercase
   const crypto = req.body.crypto.toLowerCase();

   try{
      // Make request to CoinGecko API
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price",{
       params:{
        ids:crypto,                // Crypto ID (e.g., bitcoin)
        vs_currencies:"usd",      // Currency to compare with
        include_24hr_change:true,// Include 24-hour price change
       },
          
    });

    // If crypto does not exist in API response

     if (!response.data[crypto]){
        return res.render("index.ejs",{
          cryptoData:null,
          cryptoChange:null,
          error:"crypto not found .Try bitcoin or ethereum.",
        });
     }

     // Extract price and 24h change from API response
      const cryptoPrice = response.data[crypto].usd;
      const cryptoChange = response.data[crypto].usd_24h_change;
      
      // Render page with crypto data
      res.render("index.ejs",{
         cryptoData:cryptoPrice,
         cryptoChange:cryptoChange,
         cryptoName:crypto.toUpperCase(),
         error:null,
      });
   }catch(error){
      // Handle API/server errors
      res.render("index.ejs",{
          cryptoData:null,
          cryptoChange:null,
          error:"Something went wrong.Try again later."});
   }
});


// ======================
// Start Server
// ======================

app.listen(port,() =>{
   console.log(`Server running on port ${port}`);
});
