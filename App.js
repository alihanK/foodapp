import React from "react";
import Homescreen from "./Screens/Restaurant/HomeScreen"
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import DATA from "./config/Restaurant/DATA";

const App = () => {
  
  return <RecipeDetailScreen recipe={DATA[0].recipes[7]} />;
};

export default App;
