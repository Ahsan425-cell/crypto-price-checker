import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/", (req,res) =>{
    res.render("index.ejs",{
       cryptoData : null,
       cryptoChange:null,
       cryptoName:null,
       error:null,
    });
});

app.post("/check-price", async (req,res) =>{
   const crypto = req.body.crypto.toLowerCase();

   try{
    const response = await axios.get("https://api.coingecko.com/api/v3/simple/price",{
       params:{
        ids:crypto,
        vs_currencies:"usd",
        include_24hr_change:true,
       },
          
    });
     if (!response.data[crypto]){
        return res.render("index.ejs",{
          cryptoData:null,
          cryptoChange:null,
          error:"crypto not found .Try bitcoin or ethereum.",
        });
     }
      const cryptoPrice = response.data[crypto].usd;
      const cryptoChange = response.data[crypto].usd_24h_change;

      res.render("index.ejs",{
         cryptoData:cryptoPrice,
         cryptoChange:cryptoChange,
         cryptoName:crypto.toUpperCase(),
         error:null,
      });
   }catch(error){
      res.render("index.ejs",{
          cryptoData:null,
          cryptoChange:null,
          error:"Something went wrong.Try again later."});
   }
});

app.listen(port,() =>{
   console.log(`Server running on port ${port}`);
});