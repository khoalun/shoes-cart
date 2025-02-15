import React from "react";
import { mockData } from "../mockData/mockData";
import { useCart } from "../context/CartContext";


function ShoesProducts()  {
    const {addToCart} = useCart()

     const handleAddToCart = (product) => {
        console.log('clicked', product)
        addToCart(product);
     }
     
  return (
    // <div className="products-section">
    //   <h2>Our Products</h2>
    //   <div className="products-grid">
    //     {mockData.map((product) => (
    //       <div key={product.id} className="product-card">
    //         <div className="product-image">
    //           <img src={product.image} alt={product.name} />
    //         </div>
    //         <div className="product-info">
    //           <h3>{product.name}</h3>
    //           <p>{product.description}</p>
    //           <div className="product-price">${product.price}</div>
    //           <button className="add-to-cart">Add to Cart</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
      
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
      </div>

      <div className="cardTitle">Our Products</div>

      <div className="cardBody">
        {mockData.map((product) => (
          <div key={`product-${product.id}`}>
            <div className="shopItem">
              <div
                className="shopItem_image"
                style={{ backgroundColor: product.color }}
              >
                <img
                  alt="product.name"
                  src= {product.image}
                />
              </div>
              <div className="shopItem_name">{product.name}</div>
              <div className="shopItem_description">
                {product.description}
              </div>
              <div className="shopItem_bottom">
                <div className="shopItem_price">${product.price}</div>
                <div className="shopItem_button"
                 onClick = {() =>  handleAddToCart(product)}
                >
                  <p>ADD TO CART</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ShoesProducts;