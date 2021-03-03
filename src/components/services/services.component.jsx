import React from 'react'


import {ReactComponent as Logo} from '../../assets/crown.svg'


import './services.styles.scss'



const Services = () => {

    return(
        <div className='service-container'>
            <h3 id='service-name'> OUR SERVICES</h3>
            <div className='services'>
                <div className='service sales'>
                    <div className="icon">
                        <Logo/>
                    </div>
                    <h2>WE BUY AND SELL!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam necessitatibus quam eius alias esse ducimus deserunt libero. Beatae, labore?</p>
                </div>
                <div className='service hostel-agent'>
                    <div className="icon">
                        <Logo/>
                    </div>
                    <h2>GET A HOSTEL QUICK AND EASILY</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, saepe.</p>
                </div>
                <div className='service do-it-all'>
                    <div className="icon">
                        <Logo/>
                    </div>
                    <h2>WE DO IT ALL!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad esse fuga, maxime corporis facere odio.</p>
                </div>
                {
                    document.getElementsByClassName('service')
                }
            </div>
        </div>
    )
}


export default Services