import "./App.css";
import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = "80f7721e";
  const APP_KEY = "af1f238ef723597a4d833ac96e0e1b8e	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="mt-20">
      <form onSubmit={getSearch}>
        <div class="flex items-center justify-center">
          <div class="flex border-2 rounded">
            <input
              type="text"
              class="px-4 py-2 w-80"
              placeholder="Search..."
              value={search}
              onChange={updateSearch}
            />
            <button class="flex items-center justify-center px-4 border-l">
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-3 gap-2 content-center">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
