import React from 'react'
import { Link } from 'react-router'
let ElPaso = '../app/shared/images/mountainClean.png'//not working

const Footer = (props) => {
    return(
        <div className='footer'>
            <p className ='floatLeft'>made with React.js</p>
            <p className='floatLeft center'>links to social media</p>
            
            <div className='floatRight'>
                <img className='imgFooter' src={ElPaso} alt="El Paso, Texas"/>
            </div>
            <p className='floatRight'>based in El Paso, Texas</p>
            
        </div>
    )
}

export default Footer