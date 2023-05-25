import { useState } from "react";
import { useContext } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { allQuoteContext } from "./AddQuoteButton.js";
import './QuoteInput.css'

export const QuoteInput = ({ text, index }) => {

  const { register, control, getValues, setValue } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "quotes"
  });

  const { allQuoteTexts, setAllQuoteTexts } = useContext(allQuoteContext);
  const [quoteText, setQuoteText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const indexT = allQuoteTexts.find(q => q === quoteText)
    console.log(indexT)
    setQuoteText(e.target.value)
    setAllQuoteTexts([...allQuoteTexts][indexT] = quoteText)
    //const index = getValues("quotes").findIndex({"quote": e})
    //console.log("index = ", index)
  }

  const handleDeleteClick = (e) => {
    e.preventDefault();
    if (allQuoteTexts.length > 1) {
      setAllQuoteTexts(
        [...allQuoteTexts].filter((quote) => quote !== quoteText)
      );
    } else {
      setAllQuoteTexts([]);
    }
  };

  return (
      <div className="quoteLine">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={quoteText !== "" ? quoteText : ""}
              placeholder="Type your quote..."
              onChange={handleSaveEdit}
            ></input>
            <input type="submit" value="save" onClick={handleSubmit}></input>
            </div>
        ) : (
          <div className="row">
            <span className="col-8">{quoteText}</span>
            <span className="col-4">
              <button className="quoteButton" onClick={handleEditClick}>Edit</button>
              <button className="quoteButton" onClick={handleDeleteClick}>Delete</button>
            </span>
          </div>
        )}
      </div>
  );
};
