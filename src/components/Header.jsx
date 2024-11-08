import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {logo} from "../assets/IMG_9545.jpg";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const returnTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <header>
        <nav>
          <Link to="/" className="logo" onClick={returnTop}>
            {logo}
          </Link>
          <Link to="/" onClick={returnTop}>
            ホーム
          </Link>
          <Link to="concept" onClick={returnTop}>
            こだわり
          </Link>
          <Link to="/menu" onClick={returnTop}>
            メニュー
          </Link>
          <Link to="/access" onClick={returnTop}>
            店舗情報
          </Link>
          <Link
            to="https://airrsv.net/yokogawacomfy/calendar"
            className="booking"
          >
            オンライン予約
          </Link>
        </nav>

        <div className="toggle_header">
          <Link to="/" className="mobile-logo" onClick={returnTop}>
            横川コンフィ
          </Link>
          <div className={`mobile-header ${open ? "hidden" : ""}`}>
            <Link to="/menu" className="mobile-header-item" onClick={returnTop}>
              メニュー
            </Link>
            <Link
              to="https://airrsv.net/yokogawacomfy/calendar"
              className="mobile-header-item"
            >
              WEB予約
            </Link>
          </div>

          <div
            className={`toggle_btn ${open ? "active" : ""}`}
            onClick={handleOpen}
            id="btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className={`nav-menu ${
                open ? "active-nav-list" : "none-nav-list"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* <div
          className={`nav-menu ${open ? "active-nav-list" : "none-nav-list"}`}
        > */}
              <ul>
                <div className="margin"></div>
                <li onClick={closeMenu}>
                  <Link to="/" onClick={returnTop}>
                    <span>ホーム</span>
                  </Link>
                </li>

                <li onClick={closeMenu}>
                  <Link to="/concept" onClick={returnTop}>
                    <span>こだわり</span>
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/menu" onClick={returnTop}>
                    <span>メニュー</span>
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link to="/access" onClick={returnTop}>
                    <span>店舗情報</span>
                  </Link>
                </li>
              </ul>
              <div className="menu-info">
                <p className="p">ご予約・お問い合わせ</p>
                <p className="tel">082-909-2024</p>
                <Link
                  className="btn"
                  to="https://airrsv.net/yokogawacomfy/calendar"
                >
                  <div className="arrow">
                    <span></span>
                  </div>
                  WEB予約はこちら
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`mask ${open ? "mask" : "mask-none"}`}
          onClick={handleOpen}
        ></div>
      </header>
    </>
  );
};
