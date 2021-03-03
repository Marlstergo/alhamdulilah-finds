import React from 'react'
import './homepage.styles.scss'

import Services from "../../components/services/services.component";


const HomePage = () => {

    return(
    <div className='homepage'>
        <h1 onClick={() => console.log('focus')} onPointerOver={() =>console.log('am over')} onPointerLeave={() => console.log('left')}>HOSTEL CORN!!</h1>
        <p>THIS WOULD BE A STUDENTS COMPANION APP</p>

        <Services/>
    </div>
    )
    
} 


export default HomePage