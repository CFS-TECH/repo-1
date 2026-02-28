import CareerDetails from '@/page/career/CareersDetails/CareerDetails'
import React from 'react'

const page = async({params}) => {
    const {slug} = await params
  return (
    <div>
      <CareerDetails/>
    </div>
  )
}

export default page