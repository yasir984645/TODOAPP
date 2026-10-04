import React, { useEffect, useState } from 'react'
import todoList from '../script'

const Footer = () => {
 
  const currentDate = new Date()
  const date = new Date(todoList[0].date)
  const due = new Date(todoList[0].due)


  return (

    <div className='footer'>
      

    </div>
  )
}

export default Footer