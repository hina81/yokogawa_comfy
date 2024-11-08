import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div>
      <footer>
        <ul id="footermenu">
          <li>
            <Link to="/" onClick={returnTop}>
              ホーム
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={returnTop} className="footer-info">
              メニュー
            </Link>
          </li>
          <li>
            <Link to="/access" onClick={returnTop} className="footer-info">
              店舗情報
            </Link>
          </li>
          <li>
            <Link to="https://airrsv.net/yokogawacomfy/calendar">
              オンライン予約
            </Link>
          </li>
        </ul>

        <div>
          <p>〒733-0011 広島県広島市西区横川町2丁目5-4</p>
          <p>TEL: 082-909-2024</p>

          <div id="copyright">
            <small>Copyright&copy; 横川コンフィ All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};
