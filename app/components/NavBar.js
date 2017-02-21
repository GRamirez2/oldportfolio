import React from 'react'
import { Link } from 'react-router'
import Footer from './Footer'

// import './NavBar.css'

const NavBar = (props) => {
    return(
        <div className='container'>
            <div className='row'>

                <Link to ="/">
                <a className='bold'>George Ramirez</a>
                </Link>
                    <Link to ="/pdf">
                    <a className ='one columns nav__button'>pdf</a>
                    </Link>
                    <Link to ="/contact">
                    <a className ='one columns nav__button'>contact</a>
                    </Link>
                    <Link to ="/story">
                    <a className ='one columns nav__button'>story</a>
                    </Link>
                    <Link to ="/resume">
                    <a className ='one columns nav__button'>resume</a>
                    </Link>
            </div>
            {props.children}
            <Footer />
        </div>
    )
}

export default NavBar