'use client '
import React, { useState } from 'react'
import {CustomFilterProps} from "../types"
import SearchMenuFacturer from './SearchMenuFacturer'
import { manufacturers } from '../constants/index';
const CustomFilter = ({title}: CustomFilterProps) => {
  const [manufacturer, setManufacturer] = useState("")
  const handleSearch = () => {
    console.log("search")
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'> 
        <SearchMenuFacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  )
}

export default CustomFilter