import React, { useEffect, useState } from "react";
import "../style/footer.scss";
import { Heart } from "tabler-icons-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__col">
          <h1>SKOLESNUS.DK</h1>
          <button
            className="footer__wrapper__sub-cta"
            onClick={() =>
              (document.location.href = "https://app.skolesnus.dk")
            }
          >
            Gå til forum
          </button>
        </div>
        <div className="footer__wrapper__col">
          <h3>Hurtige links</h3>
          <ul>
            <li>
              <a href="https://app.skolesnus.dk/blog">Blog</a>
            </li>
            <li>
              <a href="https://app.skolesnus.dk/t/salg">Salg</a>
            </li>
            <li>
              <a href="https://app.skolesnus.dk/t/k-b">Køb</a>
            </li>
            <li>
              <a href="https://app.skolesnus.dk/t/support">Support</a>
            </li>
            <li>
              <a href="https://app.skolesnus.dk/p/1-regler">Regler</a>
            </li>
            <li>
              <a href="https://app.skolesnus.dk/p/2-faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer__wrapper__col">
          <h3>Kontakt</h3>
          <ul>
            <li>
              <a href="#">hello@skolesnus.dk</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="byline">
        <p>Made with ❤ by DASHXD</p>
      </div>
    </div>
  );
};

export default Footer;
