import React, { Component } from "react";
import Axios from "axios";

class ProductsContent extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.id = props.id;
    this.active = props.active;
    this.state = {
      products: [],
    };
  }
  componentWillMount() {
    Axios.get("http://localhost:3000/api/products").then((res) => {
      const list = [];
      res.data.forEach((product) => {
        if (product.category.toLowerCase() === this.name.toLowerCase()) {
          list.push({
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            imageURL: product.imageURL,
            price: product.price,
            stock: product.stock,
          });
          return true;
        } else if (this.name === "All Items") {
          list.push({
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            imageURL: product.imageURL,
            price: product.price,
            stock: product.stock,
          });
          return true;
        }
      });
      this.setState({ products: list });
    });
  }
  render() {
    return (
      <div
        className={`tab-pane fade show ${this.active}`}
        id={`product${this.id}`}
        role="tabpanel"
        aria-labelledby={`productlist${this.name}`}
      >
        <div class="row gy-4">
          {this.state.products.map((product) => {
            return (
              <div class="col-md-5 col-10 mx-auto">
                <div class="card shadow-lg">
                  <img
                    src={product.imageURL}
                    class="card-img-top"
                    alt={product.name}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="/" class="btn btn-primary btn-block">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductsContent;
