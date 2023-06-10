import React from 'react';
import './App.css';
import Meal from './Meal';
import './index.css';
import {Routes,Route} from "react-router-dom";
import RecipeInfo from './RecipeInfo';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Meal />} />
      <Route path="/:MealId" element={<RecipeInfo />} />
    </Routes>
    
    
    </>
  );
}

export default App;
