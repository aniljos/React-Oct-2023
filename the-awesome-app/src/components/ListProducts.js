import axios from 'axios';
import {useEffect, useState} from 'react';
import './ListProducts.css';
import { useNavigate } from 'react-router-dom';
import {useSelector, useStore} from 'react-redux';

function ListProducts(){

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    

    //useEffect(callback, [list of dependencies]);
    // there are no dependencies
    //                     (This ensure that the callback is invoked on once when the component is mounted)
    useEffect(() => {

        fetchProducts();
    }, []);

    function fetchProducts(){

        const url = "http://localhost:9000/secure_products";
        // Authorization : Bearer xxxxyyyyzzz
        const headers = {"Authorization": `Bearer ${auth.accessToken}`};
        axios.get(url, {headers})
                .then((response) => {
                    console.log("success", response);
                    setProducts(response.data);
                }, (errorResponse) => {
                    console.log("error", errorResponse);
                })


    }

    async function handleDelete(product){

        try{

            const url = "http://localhost:9000/products/" + product.id;
            const response = await axios.delete(url);
            //process the process
            alert("Product has been deleted");

            //fetchProducts();

            //update the products(state)
            const copy_of_products = [...products]; // state in react is immutable
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1){
                copy_of_products.splice(index, 1); // removes an element
                setProducts(copy_of_products);
            }

        }
        catch(errorResponse){
            alert("Failed to delete the product");
        }
        
    }

    function handleEdit(product){
        navigate("/products/" + product.id);
    }

    return (
        <div>
            
            <h4>List Products</h4>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((product) => {

                    return (
                        <div key={product.id} className='product'>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <div>
                                <button onClick={() => {handleDelete(product)}}>Delete</button> &nbsp;
                                <button onClick={() => {handleEdit(product)}}>Edit</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default ListProducts;