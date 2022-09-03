import React from 'react';
import { Category } from '../../hooks/list';
import { Container } from './styles';


interface PanelData {
    categories: Category[];
    setSelectedCategoryId: (id: string) => void;
}


export const Panel: React.FC<PanelData>= ({categories, setSelectedCategoryId}) => {
  return (
    <Container>
        {categories.map(category => {

            const {name, _id} = category;

            return  (
                <button key={category._id} type="button" onClick={() => setSelectedCategoryId(_id)}><span>{name}</span></button>
            )
        })}
    </Container>
  );
}
