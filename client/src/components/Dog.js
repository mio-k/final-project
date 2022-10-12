import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function Dog(){
    const {id} = useParams()
    const [dog, setDog] = useState({
        name: "",
        breed: "",
        age: 0,
        color: "",
        user: {
            firstname: "",
            lastname: ""
        }
    });
    useEffect(()=> {
        fetch(`/dogs/${id}`)
        .then(r => r.json())
        .then(individualDog => setDog(individualDog))
    }, [])

    return(
        <div>
        <h2>Dog {dog.id}</h2>
        <p>Name: {dog.name}</p>
        <p>Breed: {dog.breed}</p>
        <p>Age: {dog.age} years old</p>
        <p>Color: {dog.color}</p>
        <p>Owner: {dog.user.firstname}</p>
        </div>
    )
}
export default Dog;