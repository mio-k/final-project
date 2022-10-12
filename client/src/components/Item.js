import React, {useState, useEffect} from "react"
import EditItem from "./EditItem";
import {useNavigate, useParams} from "react-router-dom"

function Item({onDeleteItem}){

  const {id} = useParams()
  const [item, setItem] = useState({
    name:"",
    description:"",
    user:"",
    tags: ([])
  });
    useEffect(()=> {
        fetch(`/items/${id}`)
        .then(r => r.json())
        .then(individualItem => setItem(individualItem))
    }, [])

    let navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    function handleDeleteClick() {
        fetch(`/items/${id}`, {
          method: "DELETE",
        })
        .then(() => {
          onDeleteItem(id)
          navigate(`/itemlist`)
        })
      }
    function onUpdateItem(updatedItem) {
        setItem(updatedItem)
      }

    return(
        <div>
        {item ?  (
          <div>
          <h3>Item: {item.name}</h3>
          <p>Description: {item.description}</p>
          <p>Offered by: {item.user.firstname}</p>
          <ul>Category: {item.tags.map((tag) =>(
            <li>{tag.category}</li>))} </ul>
          {isEditing ? (
              <EditItem item={item} onUpdateItem={onUpdateItem} />
            ) : ("")
          }
          <button class="btn btn-outline-danger btn-sm" onClick={handleDeleteClick}>Delete Item</button>
          <button class="btn btn-outline-danger btn-sm"onClick={() => setIsEditing((isEditing) => !isEditing)}>
               Edit Item
          </button> </div>
          ): <p>No item from this user</p>}
      </div>
    );
}
export default Item;