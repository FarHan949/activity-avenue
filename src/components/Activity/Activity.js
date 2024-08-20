import React from 'react';
import './Activity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faTimeline } from '@fortawesome/free-solid-svg-icons/faTimeline';

const Activity = (props) => {
    
    const {activity, AddToCart} = props
    const {age, name, details, picture, time} = props.activity
    return (
        <div className='box'>
               <img src={picture} alt=""></img> 
          
          <div className='b-info'>
            <h2>{name}</h2>
            <p>{details}</p>
            <div className='b-p'>
            <p>Age : {age}</p>
            <p>Time required : {time}m</p>
            </div>     
          </div>

          <button onClick={()=>AddToCart(activity)}  className='add-btn'>
                <FontAwesomeIcon icon={faTimeline}></FontAwesomeIcon>
                <p className='btn-text'>Add To List</p>
             </button>
        </div>

    );
};

export default Activity;