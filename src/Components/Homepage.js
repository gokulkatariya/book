import React from 'react'
import img2 from './Images/image2.jpg';
import Signup from './Singup';


export default function Homepage() {
    return (
<>

        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
           
                <div className="carousel-item active">
                <div className="carousel-caption">
                    <h1 style={{fontSize:"3.5rem"}}>WELLCOME TO BOOK STORE</h1>
                    <p style={{marginBottom:'5rem'}}>“A BOOKSTORE IS ONE OF THE FEW PLACES WHERE ALL THE CANTANKEROUS, CONFLICTING, ALLURING VOICES OF THE WORLD CO-EXIST IN PEACE AND ORDER AND THE AVID READER IS AS FREE AS A PERSON CAN POSSIBLY BE, BECAUSE SHE IS FREE TO CHOOSE AMONG THEM.”</p>
                    <Signup/>
                </div>
                    <img src={img2} className="d-block w-100" alt="..." height="600" />
                </div>
               
            </div>
        </div>
        </>
    )
}
