import { useState } from 'react';
import productsCategory from '../../productsCategory.json';

interface Image {
    alt: string;
    asset: {
        url: string;
    }
}

export interface Product {
    name: string;
    shortDescription: string;
    id: string;
    images: Image[];
    category: {
        id: string;
        name: string;
    }
}

interface ReturnType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export function useList(): ReturnType {

    const parsedProducts = JSON.parse(JSON.stringify(productsCategory))?.data?.nodes;


    const [products, setProducts] = useState([...parsedProducts]);

    return {
        products,
        setProducts,
    }


}