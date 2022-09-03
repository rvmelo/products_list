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
                <Container>
                    <h1>{product.name}</h1>
                    <p>{product.shortDescription}</p>
                    {product?.images?.map(image => (
                        <img alt={image.alt} src={image?.asset?.url}/>
                    ))}
                </Container>
            ))};
        </React.Fragment>
    )
}

