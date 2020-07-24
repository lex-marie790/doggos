import React from 'react';

const DoggoCard = ({ dogs }) => {
    return(
        <>
            {dogs.map((dog) => {
                return(
                    <div key={dog.id}>
                        <h1 >{dog.weight}</h1>
                        <p>{dogs.id}</p>
                        <h2 >{dog.name}</h2>
                        <h3 >{dog.temperament}</h3>
                        <img src = {dog.url}  />
                </div>
                )}
            )}
        </>
    )
};

export default DoggoCard;
