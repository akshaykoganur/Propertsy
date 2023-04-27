import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <Link to='/submitSell'>
        Sell Properties
      </Link>
      <Link to='/submitRent'>
        Rent Properties
      </Link>
    </div>
  )
}

export default Profile