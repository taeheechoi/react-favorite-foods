import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/*
  Hi there! Thanks for taking on this code test.
  The requirements are listed below:

  1. Render all of the items in the list of FoodData the DOM with the root 
    element as the parent
  2. If the user clicks a food item, it should toggle one of two modes.
    a. If in ❎ mode, or not in a mode, it changes to ✅.
    b. If in ✅ mode, changes to ❎.
  3. A reset link should appear after the list. If the user clicks the link
     return the list to the original state.

Example Solution:
https://imgur.com/a/r5DPTlp

  Restrictions:
  - Time limit: 30 minutes
  - Use this codesandbox. You can include any 3rd party libraries,
  frameworks, etc as you see fit, but note the time limit.
  - There are no restrictions on outside resources, feel free to
  look up what you need to, but please do not look up complete solutions
  or copy-paste entire solutions into this challenge.

  Suggestions:
  - Use the constants defined below to help render emoji
  - Do not focus on styles until after all of the requirements are met,
  this challenge is designed to test JS knowledge, design is not important.
*/

/* DO NOT MODIFY */
const likedEmoji = "✅";
const dislikedEmoji = "❎";
const rootElement = document.querySelector(".foods");

const foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco"
  },
  {
    id: 2,
    image: "🍔",
    name: "burger"
  },
  {
    id: 3,
    image: "🍆",
    name: "eggplant"
  },
  {
    id: 4,
    image: "🍎",
    name: "apple"
  },
  {
    id: 5,
    image: "🥞",
    name: "pancakes"
  }
];
/* END DO NOT MODIFY */

export const App = () => {
  const [like, setLike] = useState({});

  const toggleLike = (id) => {
    setLike({
      ...like,
      [id]:
        like[id] === null || like[id] === likedEmoji
          ? dislikedEmoji
          : likedEmoji
    });
  };

  const foodItems = foodData.map((food) => (
    <li key={food.id} onClick={() => toggleLike(food.id)}>
      {like[food.id]}
      {food.image}
      {food.name}
    </li>
  ));
  console.log(like);

  return (
    <div>
      <ul>{foodItems}</ul>
      <a href="." onClick={() => setLike({})}>
        reset
      </a>
    </div>
  );
};

const root = createRoot(rootElement);
root.render(<App />);
