import React, { useState } from 'react';
import './Cart.css'
import user from '../../images/Hailee_Steinfeld.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props
    console.log(cart)

    const [breakTime, setBreakTime] = useState(0)
       
    //   let newBreak = 0;

      const breakBtnFunction = (time) => {
          setBreakTime(time)
          }

 let time = 0
 for (const activity of cart){
    time = time + activity.time
 }

    return (
        <div className='cart'>
            {/* <h2>cart : {cart.length}</h2> */}
            <div className='user'>
                <img src={user} alt=""></img>
                <div>
                    <p>Hailee Steinfeld</p>
                    <div className='icon'>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <p>California, United States</p>
                    </div>
                </div>
            </div>

               <div className='user-info'>
                       <p>68<small>kg</small> Weight</p>
                       <p>5.8 Height</p>
                       <p>27<small>yrs</small> Age</p>
               </div>

                <h2>Add break time</h2>
               <div className='time-break'>
                     <p onClick={() => breakBtnFunction(10)}>10<small>m</small></p>
                     <p onClick={() => breakBtnFunction(20)}>20<small>m</small></p>
                     <p onClick={() => breakBtnFunction(30)}>30<small>m</small></p>
                     <p onClick={() => breakBtnFunction(40)}>40<small>m</small></p>
                     <p onClick={() => breakBtnFunction(50)}>50<small>m</small></p>
               </div>

               <h2>Exercise Details</h2>
               <div className='exercise-time'>
                      <p>Exercise time</p>
                      <p>{time}<small>m</small></p>
               </div>
               <div className='exercise-break'>
                     <p>Break time</p>
                     <p>{breakTime}<small>m</small></p>
               </div>

               <div>
                <button className='btn'>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    <p>Activity done</p>
                </button>
               </div>
            
        </div>
    );
};

export default Cart;