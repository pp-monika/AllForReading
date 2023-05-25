import { useState, createContext, useEffect } from "react";
import { QuoteInput } from "./QuoteInput";
import { useFormContext, useFieldArray } from "react-hook-form";
import './AddQuoteButton.css'

export const allQuoteContext = createContext([]);

export const AddQuoteButton = () => {

  const { control, getValues } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "quotes"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newQuoteText, setNewQuoteText] = useState("");
  const [allQuoteTexts, setAllQuoteTexts] = useState([]);

  useEffect(() => {
    setIsSubmitted(true)
    console.log(allQuoteTexts)
  }, [allQuoteTexts]);

  const handleAddQuoteButtonSubmit = (e) => {
    e.preventDefault();
    append( { "quote": newQuoteText })
    setIsSubmitted(true);
    setAllQuoteTexts([...allQuoteTexts, newQuoteText]);
    document.getElementById("QuoteField").value = "";
  };

  const handleAddQuoteButtonChange = (e) => {
    e.preventDefault();
    setNewQuoteText(e.target.value);
  };

  return (
    <div id="quoteLine">
      <allQuoteContext.Provider value={{ allQuoteTexts, setAllQuoteTexts }}>
          <input
            id="QuoteField"
            type="text"
            placeholder="Type your quote..."
            
            onChange={handleAddQuoteButtonChange}
          ></input>
          &nbsp;&nbsp;
          <input type="submit" value="Add quote" onClick={handleAddQuoteButtonSubmit}></input>
        <br />
        {isSubmitted &&
          getValues("quotes").map((quoteValues, index) => {
            return <QuoteInput text={quoteValues.quote} index={index} />;
          })}
      </allQuoteContext.Provider>
    </div>
  );
};
