import {useEffect}from 'react'
import axios from 'axios';
import {Link} from'react-router-dom';
import { useNavigate } from 'react-router-dom';


const ProductList = (props) => {
    const {product,setProduct} = props;
    const NAVIGATE = useNavigate();

    const deleteHandler = (productId)=> {
        
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then( res => {
                const newList = product.filter((product,index) => product._id !== productId)
                setProduct(newList)
                
                NAVIGATE('/')
            })
            .catch( (err)=> console.log(err))
    }       

    useEffect ( ()=>{
        axios.get('http://localhost:8000/api/product')
            .then( (res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch( (err)=>console.log(err))
    }, [setProduct])


    return (
    <div >
        <h1>Product List</h1>
            {
                product.map( (product,index)=>{
                    return(
                        <div key={index}>
                            <hr/>
                            <p>
                                <Link to= {`/product/${product._id}` } style={{color:'white',margin:'10px'}}>
                                    {product.title}
                                </Link>
                            </p>
                            <p>
                                <Link to= {`/product/edit/${product._id}` } style={{color:'white'}}>
                                    <button className='btn btn-info'>Edit</button>
                                </Link>
                            </p>
                            <p>
                                <button className='btn btn-danger' onClick={()=> {deleteHandler(product._id)} }>Delete</button>
                            </p>
                            
                        </div>
                    )
                })
            }
    </div>
    )
}

export default ProductList