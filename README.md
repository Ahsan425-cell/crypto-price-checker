# crypto-price-checker
A simple Node.js application to check the **Current price and 24-hour change** of cryptocurrencies using the [CoinGecko API] (https://www.coingecko.com/en/api).

The app is built with:
 **Node.js** for the server.
 **Express.js** as the web framework.
 **EJS** as the templating engine.
 **Axios** to make API request.
 **HTML,CSS** for front-end styling.

_ _ _

## Features
 Enter a cryptocurrency name (e.g.,Bitcoin ,Ethereum ) in the search box.
 Displays the current USD price
 Shows the 24-hour price change in green (positive) or red (negative).
 Handles the invalid crypto names with proper error messages.

_ _ _

## Prerequisites
 [Node.js] (https://nodejs.org/en/download/) installed .
 npm (comes with Node.js).
 Optional:`nodemon` for automatic server restart during development.

_ _ _

## Installation

 1. Clone the repository:

 ```bash
 git clone https://github.com/yourusername/crypto-price-checker.git

 2.Go to Project Folder:

 cd crypto-price-checker

 3.Install dependicies:

 npm install

**Running the Server**
 *Using Node:

 node index.js

 *Using Nodemon(recommended):

 nodemon index.js

**Accessing the Website**

Open browser and go to: http://localhost:3000

**Project Structure**

crypto-price-checker/
├── public/
│   └── style.css
├── views/
│   └── index.ejs
├── server.js
├── package.json
└── README.md

**Notes**

1. Do not commit node_modules folder.

2. Internet is required to fetch crypto prices.

**License**

Open-source project for learning purposes.







































 
