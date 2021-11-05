import "./App.css";
import "./key";
import Axios, * as others from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = "4da09b8d";
  const YOUR_APP_KEY = "23c7b2c1d347e5914627e18225d85a11";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipes}>🍔Food Recipe Plaza🍔</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter Ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app__healthLabels">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("paleo")}>Paleo</option>
          <option onClick={() => sethealthLabel("kosher")}>Kosher</option>
          <option onClick={() => sethealthLabel("low-sugar")}>Low-sugar</option>
          <option onClick={() => sethealthLabel("keto-friendly")}>Keto-friendly</option>
          <option onClick={() => sethealthLabel("dairy-free")}>Dairy-free</option>
          <option onClick={() => sethealthLabel("gluten-free")}>Gluten-free</option>
          <option onClick={() => sethealthLabel("peanut-free")}>Peanut-free</option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
