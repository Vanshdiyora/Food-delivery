import Headers from './Headers';
import FoodCard from './FoodCard';
import { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import axios from 'axios';

function Food() {
    const { addItem } = useCart();
    const [foodItems, setFood] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [itemsFound, setFound] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost/Food%20Delivery/products.php');
                console.warn('result', result.data);

                // Ensure that result.data is an array
                if (Array.isArray(result.data)) {
                    setFood(result.data);
                    setCartItems(result.data);
                } else {
                    console.error("Expected an array but got:", result.data);
                }
            } catch (error) {
                console.error("Error fetching food items:", error);
            }
        };

        fetchData();
    }, []);

    console.log(foodItems);

    function searchFood(search) {
        setFound(true);
        if (search === '') {
            setCartItems(foodItems);
            return;
        }

        const newItems = foodItems.filter(
            (i) => i.name.toLowerCase().includes(search.toLowerCase())
        );

        setCartItems(newItems);
        if (newItems.length === 0) {
            setFound(false);
        }
    }

    return (
        <>
            <Headers count={totalCount} />
            <input type='text' placeholder='Search' onChange={(e) => searchFood(e.target.value)} />
            {itemsFound ? (
                <div className='food-card-container'>
                    {cartItems.map((item) => (
                        <FoodCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={`../images/${item.image}.jpg`}
                            price={item.price}
                            item={item}
                        />
                    ))}
                </div>
            ) : (
                <h1>No items Found</h1>
            )}
        </>
    );
}

export default Food;
