import React from 'react'
import VehicleLoanBanner from './VehicleBanner';
import FinalCalculator from '@/components/Calculator/FinalCalculator';
import LoanProcess from './VehicleSection';

const VehicleLoanPage = () => {
  return (
    <div>
    <VehicleLoanBanner/>
   <LoanProcess/>
    <FinalCalculator/>
    </div>
  ) 
}

export default VehicleLoanPage;