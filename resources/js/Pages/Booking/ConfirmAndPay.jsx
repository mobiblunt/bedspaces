import React from 'react'
import Guest from '@/Layouts/FrontLayout'
import HomeCards from '@/Components/HomeCards'

const ConfirmAndPay = ({booking, auth, listing}) => {
  return (
   <Guest auth={auth} title="Confirm and Pay Booking">
    <HomeCards booking={booking} listing={listing} />


   </Guest>
  )
}

export default ConfirmAndPay