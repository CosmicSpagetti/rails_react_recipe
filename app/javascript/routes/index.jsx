import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes.jsx"
import Recipe from "../components/Recipe.jsx"
import NewRecipe from "../components/NewRecipe.jsx"

// set up routes 
export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/recipe" element={<NewRecipe />} />
    </Routes>
  </Router>
);
