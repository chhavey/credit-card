import React from 'react'
import './Card.css';
// import frontside from '../../images/frontside.png';
// import backside from '../../images/backside.png';

function Card({ name, number, month, year, cvc }) {

    return (
        < div className='card-container' >
            <div className='cardContainer'>
                <div className='inner'>

                    {/* Credit Card - Front */}
                    <div className='cardFront'>
                        <div className='frontside'>
                            <div className='upperLine'>
                                <span className='fillCircle' />
                                <span className='hollowCircle' />
                            </div>
                            <div>
                                <div className='cardNumber'>
                                    {number ? number : '0000 0000 0000 0000'}
                                </div>
                                <div className='lowerLine'>
                                    <p>{name ? name.toUpperCase() : 'JANE APPLESEED'}</p>
                                    <p>{month ? month : '00'}/{year ? year : '00'}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Credit Card - Back */}
                    <div className='cardBack'>
                        <div className='backside'>
                            <p>{cvc ? cvc : '000'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Card


