import { useEffect, useState } from 'react'
import { database } from './firestore';
import './App.css'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import Values from './components/Values';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from './redux/ItemsSlice';

function App() {
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState("");

    const dispatch = useDispatch()

    
    const value = collection(database, "firereact1")
    
    let item00 = useSelector(state => state.items)
    useEffect(() => {
        const getData = async () => {
            const {docs} = await getDocs(value)
            let allData = docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            })
            
            dispatch(addItems(allData))
            setItems(item00)
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
