import { FaAccessibleIcon, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useLoaderData, useParams, Link } from 'react-router';
import { addToStoredDB } from '../Utility/AddtoDB';
import { RiArrowGoBackFill } from "react-icons/ri";


const ProductDetails = () => {
    // 1. Get the entire data object (containing the 'Apps' array)
    const data = useLoaderData(); 
    
    // 2. Get the ID from the URL
    const { id } = useParams();
    const IdInt=parseInt(id)
const handleMarkAsRead= id =>{
    addToStoredDB(id)
}
    // 3. Find the specific app. 
    // We convert item.id to String to ensure it matches the URL id format.
    // Based on your previous Home code, the array is inside `data.Apps`.
    const app = data.Apps.find(item =>(item.id) == IdInt);
   
        // store with id
        // Where to store
        // array or like a collection
        // if book already exist ,show a alert
        // if book are not exist ,push to array

return(
    <div className='mx-auto px-20'>
    <Link to='/'><button className='btn btn-primary'><RiArrowGoBackFill /></button></Link>
    <div className='w-10/16 h-[260px] grid grid-cols-2 border-2 rounded-xl mx-auto bg-slate-200'>
    <div><img className='h-[150px]' src={app.imageUrl} alt="" /></div>
    <div><h1>{app.title}</h1>
    <h2>{app.order}</h2>
    <h2>{app.description}</h2>
    <button className='btn btn-primary'>{app.category}</button>
    </div>
        <div className='flex gap-10 mx-auto'>
            <button className='btn btn-primary' onClick={()=>handleMarkAsRead(id)}>Mark As Read</button>
            <button className='btn btn-primary'>Add To Whishlist</button>
        </div>
    </div></div>
)
    // Safety check if app isn't found


}

export default ProductDetails;