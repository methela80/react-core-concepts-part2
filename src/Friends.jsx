import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
export default function Friends(){


    const [friends, setFriends] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))

    },[])



    return(
        <div className='box'>
            <h3>Friends : {friends.length} </h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)

                
            }
        </div>
    )
}

/**
 * 1.state to hold the data
 * 2.useEffect with dependency
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 4. display data on the component
 *  
 * 
 */