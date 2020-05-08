import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filteredByCtg } from "../../../actions/index"

class Category extends Component {

  selectCategorie = (e) => {
    const element = e.target
    const categoryName = element.firstChild.firstChild.textContent
    this.props.filteredByCtg(categoryName)
    document.querySelector(".f-list").style.flexBasis = "300px"
    document.querySelector(".f-list").style.opacity = "1"
  }

  render() {
    return (
      <div className="ctg noselect">
        <div className="ct-content" onClickCapture={(e) => this.selectCategorie(e)}>
          <div className="ct-box soop">
            <div className="ct-info">
              <h3 className="i-header">Çorba</h3>
            </div>
          </div>
          <div className="ct-box meat">
            <div className="ct-info">
              <h3 className="i-header">Kırmızı Et</h3>
            </div>
          </div>
          <div className="ct-box fish">
            <div className="ct-info">
              <h3 className="i-header">Beyaz Et</h3>
            </div>
          </div>
          <div className="ct-box salad">
            <div className="ct-info">
              <h3 className="i-header">Sebze</h3>
            </div>
          </div>
          <div className="ct-box dough">
            <div className="ct-info">
              <h3 className="i-header">Hamur İşi</h3>
            </div>
          </div>
          <div className="ct-box dessert">
            <div className="ct-info">
              <h3 className="i-header">Tatlı</h3>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = ({ filteredByCtg, selectedFoodReducer }) => {
  return { filteredByCtg, selectedFoodReducer }

}
export default connect(mapStateToProps, { filteredByCtg })(Category)