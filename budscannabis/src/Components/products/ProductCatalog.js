import React from 'react'
import ProductTile from './ProductTile';
import './ProductTile.css';

function ProductCatalog() {
    let tiles = [];
    //This will be replaced with dynamic retrieving of data passed into the method.
    for (let i = 0; i <16; i++){
        tiles.push(<ProductTile></ProductTile>)
    }
    return tiles;
}

export default ProductCatalog;