import React from 'react';
import { Product } from '../../hooks/list';

import { Container } from './styles';

interface ListData {
    products: Product[];
}

export const List: React.FC<ListData> = ({products}) => {
    return (
        <React.Fragment>
            {products.map(product => (
                <Container key={product.id}>
                    <h1>Name: {product.name}</h1>
                    <h1>Category: {product.category?.name}</h1>
                    <p>Description: {product.shortDescription}</p>
                    {product?.images?.map(image => (
                        <img key={image?.asset?.url} alt={image.alt} src={image?.asset?.url}/>
                    ))}
                </Container>
            ))};
        </React.Fragment>
    )
}

