import React from 'react';
import './App.css';
import { useList } from './hooks/list';
import { List } from './components/list/indext';
import { Panel } from './components/panel';

function App() {

  const {products, setSelectedCategoryId, categories} = useList();

  return (
    <div className="App">
      <Panel categories={categories} setSelectedCategoryId={setSelectedCategoryId} />
      <List products={products} />
    </div>
  );
}

export default App;
