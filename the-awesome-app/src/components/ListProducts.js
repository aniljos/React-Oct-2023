import axios from 'axios';
import {useEffect, useState} from 'react';
import './ListProducts.css';

function ListProducts(){

    const [products, setProducts] = useState([]);

    //useEffect(callback, [list of dependencies]);
    // there are no dependencies
    //                     (This ensure that the callback is invoked on once when the component is mounted)
    useEffect(() => {

        fetchProducts();
    }, []);

    function fetchProducts(){

        const url = "http://localhost:9000/products";
        axios.get(url)
                .then((response) => {
                    console.log("success", response);
                    setProducts(response.data);
                }, (errorResponse) => {
                    console.log("error", errorResponse);
                })


    }

    return (
        <div>
            <h4>List Products</h4>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((product) => {

                    return (
                        <div className='product'>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default ListProducts;