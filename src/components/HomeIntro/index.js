import React, { useState, useEffect } from 'react'
import axios from "axios";

const HomeIntro = () => {


    const [users, setUsers] = useState({});
 
    useEffect(() => {
        //make API call here using axios
        axios
            .get('http://localhost:3000/students/')
            .then(function (response) {
                console.log(response.data);
                setUsers(response.data);
           
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    return (
        <div>
           <h1>Hello World</h1>

        </div>
    )
}

export default HomeIntro
