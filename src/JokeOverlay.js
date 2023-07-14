// JokeOverlay.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeOverlay } from "./actions";

const JokeOverlay = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const jokes = useSelector((state) => state.jokes[selectedCategory]);
  const currentJokeIndex = useSelector((state) => state.currentJokeIndex);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay

    return () => clearTimeout(timer);
  }, []);

  const handleNextJoke = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      dispatch({ type: "NEXT_JOKE" });
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay

    return () => clearTimeout(timer);
  };

  const handleCloseOverlay = () => {
    dispatch(closeOverlay());
  };

  if (isLoading) {
    return (
      <div className="overlay">
        <div className="overlay-content">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>{selectedCategory}</h2>
        <p>{jokes[currentJokeIndex]}</p>
        <button onClick={handleNextJoke}>Next Joke</button>
        <button onClick={handleCloseOverlay}>Close</button>
      </div>
    </div>
  );
};

export default JokeOverlay;
