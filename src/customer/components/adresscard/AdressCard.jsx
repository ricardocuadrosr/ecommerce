import React from 'react'

const AdressCard = ({address}) => {
  return (
    <div className='text-start'>
      <div className='space-y-3'>
        <p className='font-semibold'>{address?.firstName +" "+ address?.lastName}</p>
        <p>{address?.state}, {address?.streetAddress}, {address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>phone number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AdressCard