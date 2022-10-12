import React, {useState} from "react"
import {useParams, useNavigate } from "react-router-dom";

function EditItem({item, onUpdateItem}){
    let navigate = useNavigate();
    const [revisedData, setRevisedData] = useState({
        name: item.name,
        description: item.description,
    })
    let {id} = useParams();

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`/items/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: revisedData.name,
            description: revisedData.description,
          }),
        })
          .then((r) => r.json())
          .then((updatedItem) => {
            console.log(updatedItem)
            onUpdateItem(updatedItem)
            navigate(`/items/${id}`)
          })
      }
    return(
        <form className="edit-order" onSubmit={handleFormSubmit}>
        <p>Item Name: <input type="text" name="name" value={revisedData.name} onChange={(e) => setRevisedData((previousRevisedData) => ({...previousRevisedData, name: e.target.value}))} /></p>
        <p>description: <input type="text" name="description" value={revisedData.description} onChange={(e) => setRevisedData((previousRevisedData) => ({...previousRevisedData, description: e.target.value}))} /></p>
        {/* <input type="submit" value="Save" /> */}
        <button class="btn btn-outline-danger btn-sm" type="submit" value="Save">Save</button>
      </form>
    )
}
export default EditItem;