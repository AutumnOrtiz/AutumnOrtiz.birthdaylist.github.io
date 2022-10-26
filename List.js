import React from 'react'; 

const List = ({ people}) => { 
    return ( 
        <>
        {people.map((person) => { 
            const { id, Name, Birth, Age, Profile} = person;


            return ( 
                
                <article key={id} className="person">
                <img src={Profile} alt={Name}/>
                <div>
                    <h2>{Name}</h2>
                    <h3>{Birth}</h3>
                    <p>{Age}</p>
                </div>

                </article>
            );

        })}
        </>
    );
};

export default List;