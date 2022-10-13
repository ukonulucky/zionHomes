import React from 'react'
import {BiSearch } from "react-icons/bi"
import "./Search.css"
function Search() {
  return (
 <div className="search">
          <div className="search__header">
              <h2>Find the Ideal Home</h2>
          </div>
          <div className="search__find">
              <input
                  type="text"
                  placeholder='Search...'
              />
              <BiSearch
                  color="#333"
                  fontSize={35}
              />
          </div>
          <div className="search__location">
              <h4>Filter By Province:</h4>
              <select name="" id="">
                  <option value="" >All</option>
                  <option value="ajah">Ajah</option>
                  <option value="lekki">Lekki</option>
                  <option value="ikeja">Ikeja</option>
                  <option value="ikorodu">Ikorodu</option>
              </select>
          </div>
  </div>
  )
}

export default Search