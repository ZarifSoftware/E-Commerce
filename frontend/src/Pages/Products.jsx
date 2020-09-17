import React, { Component } from "react";
import { ProductsList, ProductsContent } from "../Components";
import Axios from "axios";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillMount() {
    Axios.get("http://localhost:3000/api/categories").then((res) => {
      const categories = res.data;
      this.setState({ categories });
    });
  }
  render() {
    return (
      <section>
        <div className="container-fluid mt-5 text-animated">
          <div class="row">
            <div class="col-sm-4 order-sm-1 mt-5">
              <div class="list-group shadow-lg" id="list-tab" role="tablist">
                <ProductsList name="All Items" active="active" id="all_items" />
                {this.state.categories.map((product) => {
                  return (
                    <ProductsList
                      name={product.name}
                      id={product.id}
                      active=""
                    />
                  );
                })}
              </div>
            </div>
            <div class="col-sm-7 mx-4 order-sm-2 mt-5">
              <div class="tab-content" id="nav-tabContent">
                <ProductsContent
                  name="All Items"
                  active="active"
                  id="all_items"
                />
                {this.state.categories.map((product) => {
                  return (
                    <ProductsContent
                      name={product.name}
                      id={product.id}
                      active=""
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
