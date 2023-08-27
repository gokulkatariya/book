import React from 'react'
import img2 from './Images/image2.jpg';
import Signup from './Singup';


export default function Homepage() {
    return (
<>

        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
           
                <div className="carousel-item active">
                <div class="carousel-caption d-none d-md-block my-5">
                    <h1 style={{fontSize:"3.5rem"}}>WELLCOME TO BOOK STORE</h1>
                    <p>“A BOOKSTORE IS ONE OF THE FEW PLACES WHERE ALL THE CANTANKEROUS, CONFLICTING, ALLURING VOICES OF THE WORLD CO-EXIST IN PEACE AND ORDER AND THE AVID READER IS AS FREE AS A PERSON CAN POSSIBLY BE, BECAUSE SHE IS FREE TO CHOOSE AMONG THEM.”</p>
                    <Signup/>
                    {/* <button className="btn btn-primary my-5 ">REGISTRATION -</button> */}
                    
                </div>
                    <img src={img2} className="d-block w-100" alt="..." height="600" />
                </div>
               
            </div>
        </div>
        </>
    )
}
