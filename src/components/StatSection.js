import { useState } from "react";
import "./StatSection.css";

export const StatSection = () => {

  const [rating, setRating] = useState(0)

  const handleRatingInput = (e) => {
    e.preventDefault();
    setRating(e.target.value)
  }


  return (
    <form className="form-inline statSection">
      <h3 id="statsHeader">Stats</h3>
      <div className="fs-5 form-group statQuestion">
        <div className="row">
          <label htmlFor="startDate" className="form-label col-4">
            Start date
          </label>
          <div className="col-4">
            <input
              type="date"
              className="form-control inputBox"
              id="startDate"
            />
          </div>
        </div>

        <div className="row">
          <label htmlFor="endDate" className="form-label col-4">
            End date
          </label>
          <div className="col-4">
            <input type="date" className="form-control inputBox" id="endDate" />
          </div>
        </div>

        <div className="row ratingSection">
          <label htmlFor="rating" className="form-label col-4">
            Rating
          </label>
          <div className="col-4">
            <input
              type="range"
              className="form-control inputBox"
              min="0"
              max="5"
              defaultValue={0}
              id="rating"
              onInput={handleRatingInput}
            />
            <span id="ratingValue">{rating}</span>
          </div>
        </div>

        <div className="row">
          <label htmlFor="rereadCount" className="form-label col-4">
            Re-read count(s)
          </label>
          <div className="col-4">
            <input
              type="number"
              className="form-control inputBox"
              id="rereadCount"
              min={0}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
