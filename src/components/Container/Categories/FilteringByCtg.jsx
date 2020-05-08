import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../../styles/materialSelection.scss"
import { setVisibRecipe, selectFood } from "../../../actions/index"

class FilteringByCtg extends Component {

  selectFood = (id) => {
    const food = this.props.foodListReducer.filter(f => f.id === id)
    this.props.selectFood(food[0])
    this.props.setVisibRecipe(true)
  }


  render() {
    const foodList = this.props.foodListReducer
    return (
      <div className="f-list noselect">
        {foodList.map(f => {
          return (
            <div className="food-box" key={f.id} onClick={() => this.selectFood(f.id)}>
              <img src={require(`../../../img/foods/${f.photo}.jpg`)} alt={f.photo} />
              <div className="f-header">
                <h4>{f.name}</h4>
                <div className="f-info">
                  <i className="fas fa-user"> <span>{f.numOfPeople}</span></i>
                  <i className="fas fa-clock"><span>{f.time}</span></i>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    )
  }
}
const mapStateToProps = ({ foodListReducer }) => {

  return { foodListReducer }
}
export default connect(mapStateToProps, { setVisibRecipe, selectFood })(FilteringByCtg)

