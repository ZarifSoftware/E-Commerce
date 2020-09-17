import React from "react";

const Footer = () => {
  return (
    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-right mb-1">
          <a href="#root" className="shadow-lg">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-up-square-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "40px" }}
            >
              <path
                fill-rule="evenodd"
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 8.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
              />
            </svg>
          </a>
        </p>
        <p class="mb-1">
          Copyright &copy; ZarifSoftware || All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
