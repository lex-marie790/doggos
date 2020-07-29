import React, { Fragment } from 'react';
import '../App.css';
import { FaPaw } from 'react-icons/fa'

// props = breeds from app.js

const DoggoCard = ( props ) => {
    console.log('doggocard' + props)

    return(
        
        <div className='doggo'>
            {props.breeds.map((dog, index) => {
                console.log(dog.breeds)
                return(
                    <>
                    <div className='dog-card'>
                        <Fragment key = {index}>
                            <img src = {dog.url} alt='dog' />
                            {/* [0] came from the array  */}
                            <div className = 'card'>
                                <h1>{dog.breeds[0].name}</h1>
                                <h2>{dog.breeds[0].temperament}</h2>                               
                            </div>   
                                   
                            </Fragment> 
                                
                    </div>
                    </>
                )}
            )}
        </div>
    )
};

export default DoggoCard;
