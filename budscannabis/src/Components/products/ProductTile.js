import React from 'react'

function ProductTile() {
    return (
        <div className="tile">
                <div className="tile-image">
                    <figure className="image is-4by3">
                        <img src="https://cdn.shopify.com/s/files/1/0007/0215/2760/products/1013200_MAIN.png?v=1545425818" alt="Placeholder image"></img>
                    </figure>
                </div>
                <div className="tile-content">
                    <p className="title product-title">Weed</p>

                    <div className="content">
                        This is some dank shit
                        <br></br>
                    </div>
                    <a href="product.html" className="button is-primary">More Details</a>
                </div>
        </div>
    );
}

export default ProductTile;