import React from 'react'
import logo from "../../img/logo.svg"
const HeaderIMG = () => {
  return (
    <div className="header-img">
      <div className="heading noselect" >
        <div className="heading-logo">
          <img src={logo} alt="LOGO" />
        </div>
        <div className="heading-sentence">
          <div className="first-word">
            <span className="big-letter">N</span>
            <span>E </span>
          </div>
          <div className="second-word">
            <span className="big-letter">P</span>
            <span>İŞİRSEM </span>
            <span className="big-letter">?</span>
          </div>
        </div>
      </div>
      <div className="heading-logo">
      </div>
    </div>
  )
}
export default HeaderIMG