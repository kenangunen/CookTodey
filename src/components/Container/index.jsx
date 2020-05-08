import React, { Fragment, Component } from 'react'
import "../styles/mainStyle.scss"
import "../styles/sectionsStyle.scss"
import HeaderIMG from './HeaderIMG';
import NavBar from './NavBar';
import Categories from './Categories/index';
import MaterialSelection from "./MetarialSelection/index"
import About from './About';
import PassageSection from './PassageSection';


class index extends Component {
  render() {
    console.log("container => render");
    return (
      <Fragment>
        <HeaderIMG />
        <NavBar />
        <Categories />
        <PassageSection />
        <MaterialSelection />
        <PassageSection />
        <About />
      </Fragment>
    )
  }

}

export default index