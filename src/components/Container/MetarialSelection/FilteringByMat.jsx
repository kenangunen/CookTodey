import React, { Component } from 'react'
import { connect } from 'react-redux'
import foods from "../../../Data/foods.json"
import { setVisibRecipe, selectFood } from "../../../actions/index"

class FilteringByMat extends Component {

  selectFood = (id) => {
    const food = foods.filter(f => f.id === id)
    this.props.selectFood(food[0])
    this.props.setVisibRecipe(true)
  }


  render() {
    const foodList = this.props.selectedMatReducer
    if (foodList.length > 0) {
      return (
        <div className="filtered-food noselect">
          {foodList.map(f => {
            return (
              <div className="food-box" key={f.id} onClick={() => this.selectFood(f.id)}>
                <img src={require(`../../../img/foods/${f.photo}.jpg`)} alt={f.photo} />
                <div className="f-header">
                  <h4>{f.name}</h4>
                  <div className="f-info">
                    <i className="fas fa-user"><span>{f.numOfPeople}</span></i>
                    <i className="fas fa-clock"><span>{f.time}</span></i>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      )
    } else {
      return (
        <div className="filtered-food noselect">
          <span className="message">Malzeme seçiniz...</span>
        </div>
      )
    }

  }
}
const mapStateToProps = ({ selectedMatReducer }) => {

  return { selectedMatReducer }
}

export default connect(mapStateToProps, { setVisibRecipe, selectFood })(FilteringByMat)