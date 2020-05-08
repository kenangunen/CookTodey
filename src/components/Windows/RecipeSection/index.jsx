import React, { Component } from 'react'
import "../../styles/recipeStyle.scss"
import { connect } from "react-redux"
import { setVisibRecipe } from "../../../actions/index"
import { v1 as uuidv1 } from 'uuid';

class RecipSection extends Component {
  constructor(props) {
    super(props);
    this.recipeWin = React.createRef();

  }

  componentDidUpdate = () => {
    const container = document.querySelector(".container")
    const sectionIMG = document.querySelector(".section-img")
    if (this.props.visibility) {
      container.style.opacity = ".5"
      sectionIMG.style.opacity = "0"
      container.style.pointerEvents = "none";
      setTimeout(() => { this.recipeWin.current.style.opacity = "1" }, 100)

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      container.style.opacity = "1"

      setTimeout(() => { sectionIMG.style.opacity = "1" }, 1000)
      container.style.pointerEvents = "inherit";
      window.onscroll = function () { }
    }
  }

  render() {
    const { setVisibRecipe, selectedFoodReducer, visibility } = this.props
    const f = selectedFoodReducer

    if (visibility) {
      const ings = f.ingredients.split(',')
      console.log();
      return (
        <div className="recipe-win" ref={this.recipeWin}>
          <div className="r-left">
            <div className="r-img">
              <div className="add-recipe-book">
                <button>
                  <i className="fas fa-bookmark"></i>
                  <p>Tarif Defterime Ekle !</p>
                </button>
              </div>

              <img src={require(`../../../img/foods/${f.photo}.jpg`)} alt={f.photo} />
              <div className="r-info">
                <i className="fas fa-user"> <span>{f.numOfPeople}</span></i>
                <i className="fas fa-clock"><span>{f.time}</span></i>
              </div>
            </div>
            <div className="r-ingredients">
              <h4>İçindekiler:</h4>
              <ul>
                {ings.map(i => {
                  return (
                    <li key={uuidv1()}>{i}</li>)
                })}
              </ul>
            </div>
          </div>
          <div className="r-right">
            <div className="r-recipe">
              <h3>{f.name}</h3>
              <p>{f.directions}</p>
            </div>
          </div>
          <img className="r-logo" src={require("../../../img/logo.png")} alt="Logo" />
          <i className="fas fa-times closeWin" onClick={() => setVisibRecipe(false)}></i>
        </div>)
    } else {
      return null
    }

  }
}
const mapStateToProps = ({ setVisibRecipe, selectedFoodReducer }) => {

  return { setVisibRecipe, selectedFoodReducer }
}
export default connect(mapStateToProps, { setVisibRecipe })(RecipSection)
