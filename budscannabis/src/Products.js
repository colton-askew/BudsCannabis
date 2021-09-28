import React from 'react'
import ProductCatalog from './Components/products/ProductCatalog';
import './Components/products/ProductCatalog.css';

function Products(props) {
    return (
        <div>
            <h1 className = "catalog-title" >WEED
            </h1>
            <main className = "spectrum-grid">
                <div id = "product-catalog">
                <ProductCatalog/>
                </div>
            </main>
        </div>
    );
}

export default Products;