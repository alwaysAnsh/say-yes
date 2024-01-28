import React, { useState } from 'react'
import '../../src/App.css'
import { Link } from 'react-router-dom';

export const Hero = () => {

    const handleMouseEnter = (event) => {
        const button = event.target;
        const newX = Math.random() * (window.innerWidth - button.offsetWidth);
        const newY = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
      };
  return (
    <div className='hero' >
        <p className='statement' >Banaras chlegi ??</p>
        <div className='btn-div' >
            <Link to={'/haanBolDiya'} >
                <button id='btn-1' className='btn' >Haan</button>
            </Link>
            <button
      className='btn' id='btn-2'
      onMouseEnter={handleMouseEnter}
    >
      Naah
    </button>
        </div>
    </div>
  )
}
