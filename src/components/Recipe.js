import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className=" ml-20 mt-20 content-center text-black block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="text-2xl font-bold">{title}</h1>
      <ol>
        {ingredients.map((ingredient, id) => (
          <li
            className="italic break-normal list-disc list-inside m-2"
            key={`${title}${ingredient.foodId}${id}`}
          >
            {ingredient.text}
          </li>
        ))}
      </ol>
      <p className="font-bold text-lg text-red-500">
        {calories.toFixed()} calories
      </p>
      <img className="border-solid border-2 border-white" src={image} alt="" />
    </div>
  );
};

export default Recipe;
