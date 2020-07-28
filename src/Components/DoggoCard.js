import React, { Fragment } from 'react';
import '../App.css';

// props = breeds from app.js

const DoggoCard = ( props ) => {
    console.log('doggocard' + props)

    return(
        <div className='doggo'>
            {props.breeds.map((dog, index) => {
                console.log(dog.breeds)
                return(
                    <div className='dog-card'>
                        <Fragment key = {index}>
                            <img src = {dog.url} alt='dog' />
                            {/* [0] came from the array  */}
                            <div className = 'card'>
                                <h2>{dog.breeds[0].name}</h2>
                                <h3>{dog.breeds[0].temperament}</h3>                               
                            </div>                
                            </Fragment>
                    </div>
                )}
            )}
        </div>
    )
};

export default DoggoCard;
