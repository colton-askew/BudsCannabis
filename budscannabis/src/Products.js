import React from 'react'
import ProductCatalog from './Components/menu/ProductCatalog';
import './Components/menu/ProductCatalog.css';

function Products(props) {
    return (
        <div>
            <h1>Welcome to the Products colby
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