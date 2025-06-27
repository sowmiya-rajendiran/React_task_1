import { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Modal from './Modal';

function App(){

    // Using State
    let [list , setList] = useState([]);
    let [modalOpen , setmodalOpen] = useState(false);
    let [cartItems, setCartItems] = useState([]);
    
    // Fetch data
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => setList(data));
    },[])

    // List Add to cart function
    const handleAddToCart = (item) => {
        if (!cartItems.find(cartItem => cartItem.id === item.id)) {
            setCartItems([...cartItems, item]);
        }
        else{
            alert("Item already added to the cart !")
        }
        };


    // Display items function
    let displayList = list.map((lists) => (
        <div className='bg-white md:p-10 p-5 rounded-[5px]' key={lists.id} id={lists.id}>
            <div className='text-right'>    
                <img className='md:w-[300px] md:h-[250px] w-[200px] h-[200px] object-contain md:m-0 m-auto'  src={lists.image}></img>
            </div>
            <h3 className='mt-[30px] h-[50px] text-[17px] font-semibold overflow-hidden'>{lists.title}</h3>
            <div className='flex justify-between mt-[25px] items-center'>
                <p>Price : <b> ₹ {lists.price}</b></p>
                <button className='text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer' onClick={() => handleAddToCart(lists)}>Add to Cart</button>
            </div>
        </div>
    ) ) 
    

    return(
        <>
            <Navbar listcount={list.length}/>
            <div className='px-[30px] py-[30px] xl:px-[100px] lg:px-[60px] md:px-[40px]'>
                <div>
                    <div className='text-right relative'>
                        <button className='text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer' onClick = {() => setmodalOpen(true)}>View Cart</button>
                        <span className="text-[12px] px-[8px] py-[3px] border border-[#6f6fee] bg-[#6f6fee] rounded-full text-white absolute top-[-18px] right-[-18px]">{cartItems.length}</span>
                        <Modal 
                            isOpen={modalOpen} 
                            onClose={() => setmodalOpen(false)}
                            cartItems={cartItems}
                            onRemove={(id) => {
                                setCartItems(cartItems.filter(item => item.id !== id));
                                }}
                        />
                    </div>
                    <div className='grid xl:grid-cols-3 md:grid-cols-2 mt-10 gap-[30px] '>
                        {displayList}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;