
const fetchProducts = async () => {
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=iphone";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // MANIPULACION DEL DOM
      const products = data.results;
      const container = document.getElementById("product-list");
      
      products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
          <h2>${product.title}</h2>
          <img src="${product.thumbnail}" alt="${product.title}" />
          <p>Price: $${product.price}</p>
        `;
        container.appendChild(productElement);
      });
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };
  
  fetchProducts();
  

const express = require('express') 

const app = express() 


app.get('/mercado_libre',(req,res)=>{res.send("BUSCAR PRODUCTOS")})

app.get('/Laptops',(req,res)=>{res.send("Desplegar todos los productos relacionados con laptops")})

app.get('/Celulares',(req,res)=>{res.send("Desplegar todos los productos relacionados con celulares")})


app.use((req,res)=>{res.status(404).send("<h1> Page not found - 404 :( </h1>")})



app.listen(3000)

console.log("SERVER - OK")