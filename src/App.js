import React from "react";
import "./App.css";
import CardsProdutos from "./componentes/produto/cards";


const produtos = [ 
{ 
  "imagem": "https://www.leomadeiras.com.br/ccstore/v1/images/?source=/file/v6446827965188518846/products/5041250_Ampliada01.jpg", 
  "nome" : "Real Color Texturizado Prattan L151 3080x0,8mm Formiline",
  "sku" : "Ref.: 5041850",
  "preco" : "R$230,00",
  "id" : 1,
}, 
{ 
  "imagem": "https://www.leomadeiras.com.br/ccstore/v1/images/?source=/file/v6446827965188518846/products/5041250_Ampliada01.jpg", 
  "nome" : "Real Color Texturizado Prattan L151 3080x0,8mm Formiline",
  "sku" : "Ref.: 5041200",
  "preco" : "R$330,00",
  "id" : 2,
},
{ 
  "imagem": "https://www.leomadeiras.com.br/ccstore/v1/images/?source=/file/v6446827965188518846/products/5041250_Ampliada01.jpg", 
  "nome" : "Real Color Texturizado Prattan L151 3080x0,8mm Formiline",
  "sku" : "Ref.: 5048250",
  "preco" : "R$280,00",
  "id" : 3,
}
]

function App() {
  return (
    <div>
    <CardsProdutos produto={produtos} />
    </div>

  );
}

export default App;
