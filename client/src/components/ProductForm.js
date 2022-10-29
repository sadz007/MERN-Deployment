import {useState} from 'react'
import axios from 'axios';

const ProductForm = (props) => {

    const {product,setProduct} = props;

    const [title,setTitle]= useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')
    const [errors,setErrors] =useState({})

    

    const submitHandler = (e)=> {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description
        })
        .then( (res)=>{
            console.log(res)
            console.log(res.data)
            
            setProduct([...product, res.data]);
            console.log(setProduct)
            setTitle('');
            setPrice('');
            setDescription('');
            
        })
        .catch( (err) => {
            console.log(err.response.data.error.errors.title.message) 
            setErrors(err.response.data.error.errors)
        });
    }
    



    return (
    <div >
        <header style={{color:'lightcyan'}} >Product Manager</header> 
            <div className='Product-form'>
                <h1 style={{color:'black'}}>Add A Product</h1>
                <form onSubmit={submitHandler}className='form-control' >
                    <div className='row mb-3'>
                        <label htmlFor="title" className='col-sm-2 col-form-label'>Title:</label>
                        <input type="text" className='form-control' value={title} onChange = { (e)=>setTitle(e.target.value)} />
                        
                        {
                            
                            errors.title? <p>{errors.title.message}</p> 
                            
                            :null
                            
                        }
                        
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor="price" className='col-sm-2 col-form-label'>Price:</label>
                        <input type="number"  value={price} onChange = { (e)=>setPrice(e.target.value)} />
                        {
                            errors.price? <p>{errors.price.message}</p> :null
                        }
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor="description" className='col-sm-2 col-form-label'>Description:</label>
                        <textarea type="text"  value={description} onChange = { (e)=>setDescription(e.target.value)} />
                    
                        {
                            errors.description? <p>{errors.description.message}</p> :null
                        }
                    </div>
                    <p>
                        
                        
                        <button className='btn btn-primary' type={ errors? 'disable': 'submit'}   >Create</button>
                        
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ProductForm