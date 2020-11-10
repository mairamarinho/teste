import React from "react";

function CardsProdutos(props) {
  console.log(props)
  return (
    <div className="container">
      <div className="row">
        {props.produto.map(prod => {
          return (
            <div className="col-md-3" key={prod.id} >

            <div className="card">
  
              <img className="img" src={prod.imagem}/>
              <div className="text">
                <h5>{prod.nome}</h5>
                <h6>{prod.sku}</h6>
              </div>
              
              <div className="price">
                <h5>{prod.preco}</h5>
                <h6>Em 12 vezes fixas</h6>
              </div>
              
              <div className="bts">
                <button type="button" className="btn btn-primary btn-sm">
                  Comprar
                </button>
                <input className="input" placeholder="+   01   -" />
              </div>
              
            </div>
  
          </div>
          )
        })}

      </div>   
    </div>

  );
}

export default CardsProdutos;
