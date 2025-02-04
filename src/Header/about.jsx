import React from 'react';
import "./about.css";
import Btn from './Btn';
export default function About(props) {
  console.log(props);
  return (
    <>
    <div className='container'>
        <div className='content'>
      <h1>Barcelona news</h1>
      <p>Official FC Barcelona website. All news about the team, ticket sales,</p>
      <p> member services, supporters club services and information about Barça</p>
      <Btn/>
    </div>
    <div className='photo'>
        <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2025/01/13/363700.jpg" alt="not found" />
    </div>
    </div>
    </>
  )
}
