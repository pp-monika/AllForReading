import { useState } from "react";
import { useFormContext } from "react-hook-form";

export const BookTitle = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [bookTitle, setBookTitle] = useState("");

  const { register } = useFormContext();

  const handleChange = (e) => {
    e.preventDefault();
    setBookTitle(e.target.value);
    setIsFocus(true);
  };

  const handleOnBlur = (e) => {
    e.preventDefault();
    setIsFocus(false);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    setIsFocus(true);
  };

  return (
    <div>
      {isFocus ? (
        <h2 className="bookTitle">
          <input
            type="text"
            className="bookTitleInputBox"
            {...register("bookTitle")}
            placeholder="Book title..."
            id="bookTitleInput"
            value={bookTitle !== "" ? bookTitle : ""}
            onInput={handleChange}
            onBlur={handleOnBlur}
          />
        </h2>
      ) : (
        <h2 className="bookTitle" onClick={handleOnClick}>
          {bookTitle !== "" ? bookTitle : "No title"}
        </h2>
      )}
    </div>
  );
};
