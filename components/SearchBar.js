//client rendered
'use client'
import React, {useState} from 'react'

export default function SearchBar(props) {
    const {searchValue, setSearchValue} = props

  return (
    <input className='searchInput' value={searchValue} placeholder='Search recipe ...' onChange={(e) => {
        setSearchValue(e.target.value)}}/>
  )
}
