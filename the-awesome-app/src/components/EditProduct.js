import { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function EditProduct(){

    const params = useParams();
    const [product, setProduct] = useState({id: 0, name:"", price:0, description: ""});
    const navigate = useNavigate();

    useEffect(() => {

        fetchProduct();

    }, [])

    async function fetchProduct(){
        try {
             
            const url = "http://localhost:9000/products/" + params["id"];
            const response = await axios.get(url);
            setProduct(response.data);

        } catch (errorResponse) {
            console.log(errorResponse);
        }
    }

    function handleChangeGeneric(evt){

        const value = evt.target.value;
        const name = evt.target.name;
        const copy_of_product = {...product};
        copy_of_product[name] = value;
        setProduct(copy_of_product);

    }

    function handleChangeName(evt){

        const value = evt.target.value;
        const copy_of_product = {...product};
        copy_of_product.name = value;
        setProduct(copy_of_product);

    }



    function handleChangePrice(evt){

        const value = evt.target.value;
        const copy_of_product = {...product};
        copy_of_product.price = value ? Number(value) : 0;
        setProduct(copy_of_product);

    }
    function handleChangeDesc(evt){

        const value = evt.target.value;
        setProduct({...product, description: value});

    }

    async function saveProduct(){

        try {
          
            const url = "http://localhost:9000/products/" + product.id;
            const response = await axios.put(url, product);
            alert("Product updated");
            navigate("/products");

        } catch (errorResponse) {

           console.log(errorResponse); 
           alert("Product update failed");
        }
    }

    return (
        <div>
            <h4>Edit Product: {params.id}</h4>

            <div className='form-group'>
                <label>Name</label>
                <input className='form-control' name="name" value={product.name} onChange={handleChangeName}/>
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input type='number' name="name" className='form-control' value={product.price} onChange={handleChangePrice}/>
            </div>
            <div className='form-group'>
                <label>Description</label>
                <input className='form-control' name="name" value={product.description} onChange={handleChangeDesc}/>
            </div>
            <div>
                <button className='btn btn-success' onClick={saveProduct}>Save</button>
            </div>
        </div>
    )
}

export default EditProduct;