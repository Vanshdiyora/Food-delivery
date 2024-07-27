import { useState } from 'react';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import AddToCart from './AddToCart';
import { useCart } from 'react-use-cart';
function FoodCard(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    let {addItem}=useCart()

    return (
        <div className='food-card'>
            <div className='food-card-body'>
                <img src={props.image} className='food-img' alt={props.name} />
                <div>{props.name}</div>
                <div>Price Rs. {props.price}</div>
                <div>
                    <img src={plus} className='add-button' onClick={increment} alt='Plus' />
                    <span>{count}</span>
                    <img src={minus} className='add-button' onClick={decrement} alt='Minus' />
                </div>
                <button className='food-card-button' onClick={()=>{
                    addItem(props.item,count) 
                    setCount(0)
                    localStorage.setItem('symbol',true)
                    }
                    }>Add To Cart</button>
            </div>
        </div>
    );
}

export default FoodCard;