import React from 'react'
import "../../styles/categoriesStyle.scss"

import Category from './Category';
import FilteringByCtg from './FilteringByCtg';

const Categories = () => {
  console.log("Categories=>render");

  return (
    <div className="first section noselect">
      <div className="sec-header">
        <h2>Kategoriler</h2>
      </div>
      <div className="categories-section">
        <Category />
        <FilteringByCtg />
      </div>
    </div>
  )

}

export default Categories

