import Headers from "./Headers";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
function Logout(){
    const navigate=useNavigate()
    useEffect(()=>{
        navigate('/login')
    },[])
    return(
        <>
            <Headers/>
            {
                localStorage.removeItem('user-det')
            }
        </>
    )
}

export default Logout;