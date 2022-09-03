import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import productsCategory from './productsCategory.json';
import { useList } from './hooks/list';
import { List } from './components/list/indext';

function App() {

  const {products, setProducts} = useList();


  // useEffect(() => {
  //   console.log("products category: ", products);
  // }, [products]);

  return (
    <div className="App">
      <List products={products} />
    </div>
  );
}

export default App;
