import React, { Component } from 'react'
import materialList from "../../../Data/materialList.json"
import foods from "../../../Data/foods.json"
import { connect } from "react-redux"
import { selectMat } from "../../../actions/index"

class Materials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: [],
      foodList: foods
    }

  }

  setFoodList = (checkedMaterial, status) => {

    if (status) {
      const temp = []
      for (let f of this.state.foodList) {
        const metarialsList = f.metarials.split(",")
        for (let metarial of metarialsList) {
          if (metarial === checkedMaterial) {
            temp.push(f)
          }
        }
      }
      this.setState({ foodList: [...temp] })
      this.props.selectMat(temp)
    } else {
      if (checkedMaterial.length === 0) {
        this.props.selectMat([])
        this.setState({ foodList: [...foods] })
      } else {
        let fo = foods
        for (let m of checkedMaterial) {
          fo = fo.filter(f => f.metarials.split(",").includes(m) === true)
        }
        this.props.selectMat(fo)
      }


    }
  }

  selectMaterial = (e, checkedMaterial) => {
    if (e.target.checked) {
      this.setState({ checkList: [...this.state.checkList, checkedMaterial] })
      this.setFoodList(checkedMaterial, true)
    } else {
      const newArr = this.state.checkList.filter(c => c !== checkedMaterial)
      this.setFoodList(newArr, false)
      this.setState({ checkList: [...newArr] })

    }
  }
  render() {
    return (
      <div className="materials">
        {materialList.map(material => {
          return (
            <div className="mt-box" key={material.id}>
              <div className="b-header m-meat">
                <h4>{material.category}</h4>
              </div>
              <div className="b-content">
                {material.elements.map(m => {
                  return (
                    <div className="b-item" key={m}>
                      <div className="pretty p-default p-round p-thick" >
                        <input type="checkbox" onChange={(e) => this.selectMaterial(e, m)} />
                        <div className="state p-primary-o">
                          <label>{m}</label>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

      </div>

    )
  }
}
const mapStateToProps = ({ selectedMatReducer }) => {
  return { selectedMatReducer }
}


export default connect(mapStateToProps, { selectMat })(Materials)