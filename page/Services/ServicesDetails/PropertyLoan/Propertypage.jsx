import React from 'react'
import PropertyLoanBanner from './PropertyLoanBanner';
import PropertySection from './PropertySection';
import FinalCalculator from '@/components/Calculator/FinalCalculator';
const propertyPage = () => {
  return (
    <div>
    <PropertyLoanBanner/>
     <PropertySection/>
    <FinalCalculator/>
   
    </div>
  ) 
}

export default propertyPage;