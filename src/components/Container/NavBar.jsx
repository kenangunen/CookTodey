import React from 'react'
import logo_ from "../../img/logo.png"
const NavBar = () => {
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      document.querySelector(".nav").style.top = "0";
      document.querySelector(".nav").style.height = "80px";

    } else {
      console.log("girdim");

      document.querySelector(".nav").style.top = "0";
      document.querySelector(".nav").style.height = "0";
    }
  }

  const clickMenu = (e) => {
    const item = e.target.textContent
    if (item === "Ana Sayfa") {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else if (item === "Kategoriler") {
      document.body.scrollTop = 855;
      document.documentElement.scrollTop = 855;
    } else if (item === "Ne Pişirsem ?") {
      document.body.scrollTop = 2120;
      document.documentElement.scrollTop = 2120;
    } else if (item === "Hakkımızda") {
      document.body.scrollTop = 3380;
      document.documentElement.scrollTop = 3380;
    }

  }
  return (
    <div className="nav noselect">
      <div className="nav-items">
        <div className="nav-logo">
          <img src={logo_} alt="LOGO" />
        </div>
        <div className="menu-items" onClick={(e) => clickMenu(e)}>
          <button className="menu-item">Ana Sayfa</button>
          <button className="menu-item">Kategoriler</button>
          <button className="menu-item">Ne Pişirsem ?</button>
          <button className="menu-item">Hakkımızda</button>
          <button className="menu-item"> <i className="fas fa-book-open"></i>
            <span>2</span></button>
        </div>
      </div>
    </div>

  )
}
export default NavBar