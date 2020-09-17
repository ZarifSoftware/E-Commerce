import React, { Component } from "react";

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <section>
        <div className="container mt-5 text-animated">
          <h1 className="text-center display-5 mt-3">About E-Commerce</h1>
          <br />
          <h2>What is E-Commerce?</h2>

          <p className="mt-3 ml-5">
            E-commerce (electronic commerce) is the activity of electronically
            buying or selling of products on online services or over the
            Internet. Electronic commerce draws on technologies such as mobile
            commerce, electronic funds transfer, supply chain management,
            Internet marketing, online transaction processing, electronic data
            interchange (EDI), inventory management systems, and automated data
            collection systems. E-commerce is in turn driven by the
            technological advances of the semiconductor industry, and is the
            largest sector of the electronics industry.
          </p>
          <br />
          <h2>What service we give?</h2>
          <p className="mt-3 ml-3">
            <ul>
              <li>
                Online shopping for retail sales direct to consumers via Web
                sites and mobile apps, and conversational commerce via live
                chat, chatbots, and voice assistants
              </li>
              <li>
                Providing or participating in online marketplaces, which process
                third-party business-to-consumer (B2C) or consumer-to-consumer
                (C2C) sales
              </li>
              <li>Business-to-business (B2B) buying and selling</li>
              <li>
                Gathering and using demographic data through web contacts and
                social media
              </li>
              <li>Business-to-business (B2B) electronic data interchange</li>
              <li>
                Marketing to prospective and established customers by e-mail or
                fax (for example, with newsletters)
              </li>
              <li>
                Engaging in pretail for launching new products and services
              </li>
              <li>
                Online financial exchanges for currency exchanges or trading
                purposes.
              </li>
            </ul>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
