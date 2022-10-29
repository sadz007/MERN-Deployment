import {useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate,useParams} from 'react-router-dom';


const UpdateProduct = (props) => {
    const { id } = useParams();
    const[title,setTitle] = useState('')
    const[price,setPrice] = useState('')
    const[description,setDescription] = useState('')
    const NAVIGATE = useNavigate();

    useEffect( ()=>{
        // 'http://localhost:8000/api/product' + id
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( (res)=>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch( (err)=> console.log(err) );

    }, [id])

    const updateHandler = (e)=> {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/${id}`,{
            title,
            price,
            description
        })
        .then( res=> { 
            console.log(res);
            NAVIGATE('/home');
        })
        .catch( (err)=> console.log(err) )
    };



    return (
    <div>
        <h1>Update Product</h1>
        <div className='Product-form'>
                <form onSubmit={updateHandler}className='form-control' >
                    <div className='row mb-3'>
                        <label htmlFor="title" className='col-sm-2 col-form-label'>Title:</label>
                        <input type="text" className='form-control' value={title} onChange = { (e)=>setTitle(e.target.value)} />
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor="price" className='col-sm-2 col-form-label'>Price:</label>
                        <input type="number" min='1' value={price} onChange = { (e)=>setPrice(e.target.value)} />
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor="description" className='col-sm-2 col-form-label'>Description:</label>
                        <textarea type="text"  value={description} onChange = { (e)=>setDescription(e.target.value)} />
                    </div>
                    <p>
                        <button className='btn btn-primary'>Create</button>
                    </p>
                </form>
            </div>
    </div>
    )
}

export default UpdateProduct;