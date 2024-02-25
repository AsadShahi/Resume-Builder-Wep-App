import React from 'react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

import './features.css'

export default function Features() {
  return (
    <div>

        <div className="features">
            <div className="featuresItem">
                <span className='featureTitle'>Revenue</span>
                <div className="featureContainer">
                    <span className='featureMoney'>$2.142</span>
                    <span className='featureRate'>-11 <ArrowDownwardOutlinedIcon className="featureIcon negative "/></span>
                    
                </div>
                <span className='featureSub'>campered to last mounth</span>
            </div>

            <div className="featuresItem">
                <span className='featureTitle'>Sales</span>
                <div className="featureContainer">
                    <span className='featureMoney'>$1.142</span>
                    <span className='featureRate'>-11 <ArrowDownwardOutlinedIcon className="featureIcon negative "/></span>
                    
                </div>
                <span className='featureSub'>campered to last mounth</span>
            </div>

            <div className="featuresItem">
                <span className='featureTitle'>Cost</span>
                <div className="featureContainer">
                    <span className='featureMoney'>$2.142</span>
                    <span className='featureRate'>-11 <ArrowUpwardOutlinedIcon className="featureIcon"/></span>
                    
                </div>
                <span className='featureSub'>campered to last mounth</span>
            </div>
            
        </div>
       
    </div>
  )
}
