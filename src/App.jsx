import { useEffect, useState } from 'react'
import { database } from './firestore';
import './App.css'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import Values from './components/Values';

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const value = collection(database, "firereact1")

    useEffect(() => {
        const getData = async () => {
            const {docs} = await getDocs(value)
            let allData = docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            })

            setItems(allData)
        }
        getData()
    })

    const handleCreate = async (e) => {
        e.preventDefault()
        await addDoc(value, { val: newItem })
        setNewItem("")
    };

    return (
        <>
            <div>
                <form onSubmit={handleCreate}>
                    <input
                        className='inp'
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Add a new item"
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {items.map((item) => (
                        <li key={item.id} className='items'>
                            <Values item={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App
