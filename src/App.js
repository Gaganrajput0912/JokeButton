import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "./actions";
import JokeOverlay from "./JokeOverlay";
import "./App.css"; // Import the App.css file

const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

const App = () => {
  const dispatch = useDispatch();
  const showOverlay = useSelector((state) => state.showOverlay);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };

  return (
    <div className="grid-container">
      {" "}
      {/* Apply grid layout */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className="button" // Apply the button class
        >
          <span>{category}</span>
          <br></br>
          Unlimited jokes on {category}
        </button>
      ))}
      {showOverlay && <JokeOverlay />}
    </div>
  );
};

export default App;
