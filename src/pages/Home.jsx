import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterProductsThunk, findItemThunk, getProductsThunk } from '../store/slices/products.slice';
import '../assets/styles/home.css'
import axios from 'axios';
import { getCartProductsThunk } from '../store/slices/cartProducts.slice';
import getConfig from '../utils/getConfig';

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products);
    const [categories, setCategories] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [showCategories, setShowCategories] = useState('up');
    const [changeDirection, setChangeDirection] = useState('');

    useEffect(() => {
        dispatch(getProductsThunk())
        axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
            .then(res => setCategories(res.data.data.categories))
    }, [])

    function upAndDown() {
        showCategories === 'up' ? setChangeDirection('rotate-up') : setChangeDirection('')
        showCategories === 'up' ? setShowCategories('down') : setShowCategories('up')
    }

    function filterProducts(id) {
        id === 'all' ? dispatch(getProductsThunk()) : dispatch(filterProductsThunk(id))
    }

    function findItem(inputSearch){
        dispatch(findItemThunk(inputSearch))
    }

    function addProduct(product){
        const productSelected = {
            "id": product.id,
            "quantity": 1,
        }
        console.log(productSelected);

        axios.post('https://e-commerce-api.academlo.tech/api/v1/cart/', productSelected, getConfig())
        .then(() => dispatch(getCartProductsThunk()))
        .catch(error => console.log(error))
    }

    return (
        <section className='home-container'>
            <article className='categories-container'>
                <div className='categories-title'>
                    <h1>Categories</h1>
                    <p onClick={() => upAndDown()}>
                        <i className={`fa-solid fa-sort-down ${changeDirection}`}></i>
                    </p>
                </div>
                <div className={`categories-item ${showCategories}`}>
                    <p onClick={() => filterProducts('all')}>
                        All
                    </p>
                    {
                        categories.map(category => (
                            <p key={category.id} onClick={() => filterProducts(category.id)}>
                                {category.name}
                            </p>
                        ))
                    }
                </div>
            </article>
            <section className='list-container'>
                <div className='search-div'>
                    <input type="text"
                        placeholder="I'm looking for something amazing . . ."
                        onChange={(e) => setInputSearch(e.target.value)} 
                        value={inputSearch}/>
                    <button className='search-btn'
                    onClick={() => findItem(inputSearch)}>
                        <i className="fa-solid fa-magnifying-glass fa-xl fa-spin"></i>
                    </button>
                </div>
                <section className='products-container'>
                    {
                        products.map(product => (
                            <article key={product.id} className='product-card'>
                                <Link to={`/product/${product.id}`}>
                                    <div className='product-image'>
                                        <img src={product.productImgs[0]} alt="" />
                                    </div>
                                    <div className='product-info'>
                                        <h4>{product.title}</h4>
                                        <h4>$ {product.price}</h4>
                                    </div>
                                </Link>
                                <div className='add-cart' onClick={() => addProduct(product)}>
                                    <h3>
                                        Add cart <i className="fa-solid fa-cart-shopping"></i>
                                    </h3>
                                </div>
                            </article>
                        ))
                    }
                </section>
            </section>
        </section>
    );
};

export default Home;

// Cada producto será un link que llevará a la ruta “/product/:id”, cuyo id dependerá del producto seleccionado.
// Se listarán las categorías de los productos. Al darles clic, deben filtrar los productos de acuerdo a la categoría seleccionada.
// Debe haber un input para que el usuario pueda buscar un producto por el nombre.
// Las querys del endpoint /products te ayudarán con estos filtros.