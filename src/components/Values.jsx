import React, {useState} from 'react'
import { database } from '../firestore';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import '../App.css'

const Values = ({ item }) => {

    
    const [updateItem, setUpdateItem] = useState(item.val);
    const [saveEdit, setSaveEdit] = useState(true)

    const handleDelete = async (id) => {
        const deleteValue = doc(database, "firereact1", id)
        await deleteDoc(deleteValue)
    };

    const handleUpdate = async (id, name) => {
        if(saveEdit){
            setSaveEdit(false)
        }else{
            const updateData = doc(database, "firereact1", id)
            await updateDoc(updateData, {val: updateItem})
            setSaveEdit(true)
        }
    };


    return (
        <>
            <div>
                <input type="text"
                    value={updateItem}
                    onChange={(e) => setUpdateItem(e.target.value)}
                    readOnly = {saveEdit}
                    className='itemInp'
                />
                <button className={saveEdit ? "btns" : "btns upBtn"} onClick={() => handleUpdate(item.id, updateItem)}>
                    {saveEdit ? "Edit" : "Save"}
                </button>
                <button className='btns' onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
        </>
    )
}

export default Values