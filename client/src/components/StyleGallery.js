import React from "react";

function StyleGallery(){
    return(
        <>
        <button type="button" class="btn btn-outline-danger btn-small">Small</button>
        <p>This is btn btn-outline-danger btn-small</p>
        <li className="card">
            <img src="./img/team-1.jpg" alt="card" />
            <h4 class="card-title">Card-title style</h4>
            <button class="btn btn-outline-primary btn-sm">View</button>
        </li>
        <li className="card-register
        ">
            <img src="./img/team-1.jpg" alt="card" />
            <h4 class="card-title">Card-title style</h4>
            <p>This is card-register style</p>
            <button class="btn-center">btn-center</button>
        </li>
        </>
    )
}
export default StyleGallery