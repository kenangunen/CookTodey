import React from 'react'
import "../styles/footerStyle.scss"
import logo from "../../img/logo.png"
const Footer = () => {
  return (
    <footer>
      <div className="ftr-content">
        <div className="ftr-box">
          <img src={logo} alt="Logo" />
        </div>
        <div className="ftr-box">
          <div className="b-header">
            <h5>Menu</h5>
          </div>
          <div className="b-content">
            <ul>
              <li>Ana Sayfa</li>
              <li>Kategoriler</li>
              <li>Ne Pişirsem ?</li>
              <li>Hakkımızda</li>
              <li>Tarif Defterim</li>
            </ul>
          </div>
        </div>
        <div className="ftr-box">
          <div className="b-header">
            <h5>Uygulamayı İndir</h5>
          </div>
          <div className="b-content">
            <button>
              <i className="fab fa-apple"></i><span>App Store</span>
            </button>
            <button>
              <i className="fab fa-google-play"></i><span className="google">Google Play</span>
            </button>
          </div>
        </div>
      </div>
      <div className="ftr-info">
        <span>Copyright ©2020 All rights reserved | This template is made with by Kenan</span>
        <div className="social-media">
          <button><i className="fab fa-facebook-f"></i></button>
          <button><i className="fab fa-twitter"></i></button>
          <button><i className="fab fa-instagram"></i></button>
          <button><i className="fab fa-linkedin-in"></i></button>
        </div>
      </div>
    </footer>
  )
}
export default Footer