import React from 'react'
import { FaSearch } from 'react-icons/fa'
export default function SearchBar() {
  return (
   <form action='' className='relative W-max '>
    <input type="search" id='search' name='search' className='relative peer transition z-10 bg-transparent w-12 h-12 rounded-full border cursor-pointer outline-none focus:pr-9   focus:pl-12  focus:w-full focus:border-[#7854F7] ' />         
    <FaSearch className='absolute top-3 left-3 w-6 h-6' />                                                                                                                          
   </form>
  )
}
