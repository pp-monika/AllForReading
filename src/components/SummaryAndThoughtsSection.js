import './SummaryAndThoughtsSection.css'


export const SummaryAndThoughtsSection = () => {
  return (
    <div className="col-12 summaryAndThoughtsSection">
      <div className="row summarySection">
        <div className="col-12">
          <h3 className="textareaLabel" for="summary">Summary:</h3>
          <textarea
            className="textareaInput"
            name="summary"
            placeholder="Enter story summery here..."
            rows="5"
          />
        </div>
      </div>
      <div className="row thoughtsSection">
        <div className="col-12 pb-3">
          <h3 className="textareaLabel" for="thoughts">Thoughts:</h3>
          <textarea
            className="textareaInput"
            name="thoughts"
            placeholder="Enter your thoughs here..."
            rows="5"
          />
        </div>
      </div>
    </div>
  );
};
