import {useState} from 'react';
import Birthdays from './Birthdays';
import './Page.css';
import List from './List.js';

 function Page() { 
    const [ people, setPeople] = useState(Birthdays)


    return(
        
        <main>
        
        <section className="Page">
        <fieldset className="body">
            <h2>{people.length} Birthdays</h2>
                <List people={people} />
                <button onClick={() => setPeople([])}> Clear all</button>
                </fieldset>
                </section>
               
                </main>
            
                )}

                export default Page

      
    
