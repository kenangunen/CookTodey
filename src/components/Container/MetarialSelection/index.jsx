import React, { Component } from 'react'
import "../../styles/materialSelection.scss"
import Materials from './Materials';
import FilteringByMat from './FilteringByMat';
class MaterialSelection extends Component {
  render() {
    console.log("MaterialSelection=>render");

    return (

      <div className="section noselect">
        <div className="sec-header">
          <h2>Ne Pişirsem ?</h2>
        </div>
        <div className="material-section">
          <Materials />
          <FilteringByMat />
        </div>
      </div>


    )

  }
}

export default MaterialSelection



