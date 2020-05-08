import React, { Component, Fragment } from 'react';
import './App.scss';
import Main from './components/Container/index';
import Navigation from './components/Navigation'
import RecipeSection from "./components/Windows/RecipeSection/index"
import { connect } from 'react-redux'
import Footer from './components/Footer';
import PassageImage from './components/PassageImage';
class App extends Component {
  render() {
    const { visibRecipeReducer } = this.props
    return (
      <Fragment>
        <div className="container">
          <Navigation />
          <Main />
          <Footer />
        </div>
        <PassageImage />
        <RecipeSection visibility={visibRecipeReducer} />
      </Fragment>
    );
  }
}
const mapStateToProps = ({ visibRecipeReducer }) => {
  return { visibRecipeReducer }
}
export default connect(mapStateToProps)(App)