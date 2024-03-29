import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';
import useAddCart from '../hooks/useAddCart';
import '../assets/styles/productDetail.css'

const ProductDetail = () => {
    const { id } = useParams()
    const allProducts = useSelector(state => state.products);
    const dispatch = useDispatch()
    const selectedProduct = allProducts.find(product => product.id === Number(id))
    const similarProducts = allProducts.filter(product => product.category.id === selectedProduct.category.id)
    const [quantityProduct, setQuantityProduct] = useState(1);
    const [addProductHook] = useAddCart()

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    function incrementProduct(e) {
        setQuantityProduct(quantityProduct + 1)
        e.preventDefault()
    }

    function decrementProduct(e) {
        quantityProduct > 1 && setQuantityProduct(quantityProduct - 1)
        e.preventDefault()
    }

    function addProduct(product, quantity) {
        addProductHook(product, quantity)
    }
    
    return (
        <div className='product-detail-container'>
            <div className='home-link'>
                <p>||</p>
                <Link to='/'>Home</Link>
                <p>||</p>
                <p>{selectedProduct?.title}</p>
                <p>||</p>
            </div>
            <section className='product-detail'>
                <div className='product-img'>
                    <img src={selectedProduct?.productImgs[0]} alt="" />
                </div>
                <div className='product-features'>
                    <p><strong>{selectedProduct?.title}</strong></p>
                    <p>{selectedProduct?.description}</p>
                    <p><strong>Price: ${selectedProduct?.price}</strong></p>
                    <div className='increment-decrement-div'>
                        <button onClick={(e) => decrementProduct(e)}>-</button>
                        <p>{quantityProduct}</p>
                        <button onClick={(e) => incrementProduct(e)}>+</button>
                    </div>
                    <div className='add-to-cart' onClick={() => addProduct(selectedProduct, quantityProduct)}>
                        <h3>
                            Add cart <i className="fa-solid fa-cart-shopping"></i>
                        </h3>
                    </div>
                </div>
            </section>
            <h2>Maybe you like . . .</h2>
            <section className='similar-products'>
                {
                    similarProducts.map(product => (
                        <article key={product.id} className='product-card'>
                            <Link to={`/product/${product.id}`}>
                                <div className='product-image'>
                                    <img src={product.productImgs[0]} alt="" />
                                </div>
                            </Link>
                                <div className='product-info'>
                                    <p>{product.title}</p>
                                    <p>$ {product.price}</p>
                                </div>
                            <div className='add-cart' onClick={() => addProduct(product, 1)}>
                                <p>{'Add cart '}
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </p>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    );
};

export default ProductDetail;


// En esta ruta se mostrará toda la información del producto: nombre, imágenes, descripción y precio.
// Debe contener un contador para que el usuario seleccione cuántos productos desea comprar.
// Debe haber un botón para agregar el producto al carrito.
// (Ver endpoint “/cart - post”).
// Finalmente, debe haber un listado de productos con la misma categoría del producto seleccionado.
