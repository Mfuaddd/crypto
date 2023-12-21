import React from "react";
import LogoLight from "../../assets/img/LogoLight";
import  "./index.scss"

function HeaderComponent() {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <LogoLight/>
        </div>
        <ul className="header__navbar navbar">
          <li className="navbar__item">
            Landing Page<i class="fa-solid fa-caret-down"></i>
          </li>
          <li className="navbar__item">
            Exchange<i class="fa-solid fa-caret-down"></i>
          </li>
          <li className="navbar__item">
            Markets<i class="fa-solid fa-caret-down"></i>
          </li>
          <li className="navbar__item">
            Dashboard<i class="fa-solid fa-caret-down"></i>
          </li>
          <li className="navbar__item">
            Others<i class="fa-solid fa-caret-down"></i>
          </li>
        </ul>
        <div className="header__btns">
          <a className="header__btn" href="#">Sign In</a>
          <a className="header__btn" href="#">Get Started</a>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
