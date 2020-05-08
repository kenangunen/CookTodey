import React from 'react'
import "../styles/headerStyle.scss"
import logo from "../../img/logo.png"
const Navigation = () => {
  console.log("Header => render");

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
    <nav>
      <div className="logo noselect">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="main-menu noselect">
        <div className="menu-item">
          <ul className="navigation" onClick={(e) => clickMenu(e)}>
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/">Kategoriler</a>
            </li>
            <li>
              <a href="/">Ne Pişirsem ?</a>
            </li>
            <li>
              <a href="/">Hakkımızda</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="recipe-book noselect">
        <div className="book" title="Tarif Kitabım">
          <i className="fas fa-book-open"></i>
          <span>2</span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
