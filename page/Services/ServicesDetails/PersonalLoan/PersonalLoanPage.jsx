import React from 'react'
import PersonalLoanBanner from './PersonalBanner';
import PersonalloanSecton from './PersoanlLoanSection';
import FinalCalculator from '@/components/Calculator/FinalCalculator';

const PersonalLoanPage = () => {
  return (
    <div>
     <PersonalLoanBanner/>
     <PersonalloanSecton/>
  <FinalCalculator/>
    </div>
  ) 
}

export default PersonalLoanPage;