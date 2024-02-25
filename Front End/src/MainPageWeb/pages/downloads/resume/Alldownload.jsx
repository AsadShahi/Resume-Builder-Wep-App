import React from 'react'
import './Alldownload.css'
import FirstTemplate from './firstTemplate/FirstTemplate'
import SecondTemplate from './SecondTemplate'
import ThirdTemplate from './ThirdTemplate'
import TestDocFileTemp from './TestDocFileTemp'
import Navbar from '../../../components/navbar/Navbar'

import AsadCvTemplete from '../asadResume/AsadCvTemplete'
import AhmadTemplate from '../ahmadResume/AhmadTemplate'
export default function Alldownload() {
    return (
      
      
        <div className='container templetes-downloads' >

            <div>

            <AsadCvTemplete />
            </div>


            <div className='ah-tem mt-5 mb-5'>
            <AhmadTemplate/>

           </div>

           <div>
            <FirstTemplate/>
           </div>
           <TestDocFileTemp/>
         
        </div>
       
    )
}
