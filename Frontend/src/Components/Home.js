import {useState,useEffect} from 'react'
import page1 from '../images/page1.jpg'
import page2 from '../images/page2.jpg'
import Headers from './Headers';

const images = [page1,page2];
function Home()
{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 5000)
        
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            
            <Headers /> 
            <img  className='image-home' src={images[currentIndex]} />
        </div>
    )
}

export default Home;

    