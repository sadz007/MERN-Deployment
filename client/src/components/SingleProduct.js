import { useState, useEffect } from "react";
import { useParams ,Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SingleProduct = (props)=> {
    const {id}= useParams();
    const [singleProduct,setSingleProduct] = useState({});
    const Navigate = useNavigate();



    const deleteHandler = (productId)=> {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then( res => {
                setSingleProduct(productId)
                Navigate('/home')
            })
            .catch( (err)=> console.log(err))
    }    

    useEffect( ()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( (response)=>{
                console.log(response);
                setSingleProduct(response.data);
            })
            .catch( (err)=>{console.log(err)
    });
}, [id] );
    return (
        <div>
            <h2>{singleProduct.title}</h2>
            <p>Price:$ {singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
            <p>
                <button className='btn btn-danger'
                onClick={(e)=> deleteHandler(id)}>
                    Delete</button>
            </p>
            <p>
                <Link to={'/home'}>
                    <button className="btn btn-primary">Home</button>
                </Link>
            </p>

        </div>
    )
}

export default SingleProduct;