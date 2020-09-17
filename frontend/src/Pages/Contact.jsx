import React, { Component } from "react";
import Axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = this.state;
    const data = {
      name,
      email,
      phone,
      message,
    };
    Axios.post("http://localhost:3000/api/contact", data).then((res) => {
      if (res.data.success) {
        alert(res.data.success);
      } else if (res.data.error) {
        alert(res.data.error);
      }
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section className="mt-5">
        <div className="container-fluid text-animated">
          <div className="row">
            <div className="col-6 mx-auto">
              <h1 className="text-center">Contact us</h1>
              <div className="my-5">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-lg"
                    id="exampleFormControlInput1"
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-lg"
                    id="exampleFormControlInput2"
                    placeholder="name@example.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <div className="mb-3">
                  <label for="exampleFormControlInput3" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    className="form-control shadow-lg"
                    id="exampleFormControlInput1"
                    placeholder="+880 1234 567890"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control shadow-lg"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Enter your Message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <br />
                <div className="mt-3" style={{ marginBottom: "20px" }}>
                  <button
                    className="btn btn-primary shadow lift mr-1 btn-lg rounded-pill shadow-lg"
                    onClick={this.submit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
