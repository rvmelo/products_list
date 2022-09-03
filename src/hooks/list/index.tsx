import { useEffect, useMemo, useState } from 'react';
import productsCategory from '../../productsCategory.json';

interface Image {
    alt: string;
    asset: {
        url: string;
    }
}

export interface Category {
    _id: string;
    name: string;
}

export interface Product {
    name: string;
    shortDescription: string;
    id: string;
    images: Image[];
    category: Category;
}

interface ReturnType {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    categories: Category[];
    setSelectedCategoryId: (categoryId: string) => void;
}

export function useList(): ReturnType {

    const parsedProducts = useMemo(() => JSON.parse(JSON.stringify(productsCategory))?.data?.nodes as Product[], []);

    const categories = useMemo(() => {
        const foundCategories = parsedProducts.map(product => product.category);
        const selectedCategories = [] as Category[];

        foundCategories.forEach(foundCategory => {
            if (selectedCategories.some(selectedCategory => selectedCategory?._id === foundCategory?._id)) return;
            selectedCategories.push(foundCategory);
        })

        return selectedCategories;

    }, [parsedProducts]);

    const [products, setProducts] = useState<Product[]>([...parsedProducts]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('default');

    useEffect(() => {

        if (selectedCategoryId === 'default') {
            setProducts([...parsedProducts]);
            return;
        } 
            
        setProducts(parsedProducts.filter(parsedProduct => parsedProduct?.category?._id === selectedCategoryId));
        
    }, [selectedCategoryId, setProducts, parsedProducts]);

    return {
        products,
        setProducts,
        categories,
        setSelectedCategoryId
    }


}