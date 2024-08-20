import React, { useEffect, useState } from 'react';
import './Container.css'
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';

const Container = () => {

    const [activities , setActivity] = useState([])
    const [cart, setCart] = useState([])


    useEffect(()=>{
         fetch('data.json')
         .then( res => res.json())
         .then( data => setActivity(data))
    },[])

    const AddToCart = (activity) =>{
        const  newCart = [...cart, activity]
        setCart(newCart)
    }

    return (
        <div className='container'>
            <div className='activity-container'>
                 <h2 className='h2'>Selected today's exercise</h2>
                 <div className='all-boxes'>
                 {
                    activities.map( activity => <Activity 
                    key={activity.id}
                    activity={activity}
                    AddToCart={AddToCart}
                    ></Activity>)
                 }
                 </div>
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Container;