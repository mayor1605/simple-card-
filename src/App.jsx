import React from 'react';
import './App.css';
import SimpleCard from './card';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold my-8">Simple Card Example</h1>
      <SimpleCard
        imageUrl="placeholder-image"
        altText="Sample Card Image"
        title=" Title"
        description="description ."
      />
    </div>
  );
}

export default App;

