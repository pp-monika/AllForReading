import "./GeneralBookDetailsSection.css";
import { useFormContext } from "react-hook-form";

export const GeneralBookDetailsSection = () => {

  const { register } = useFormContext();

  return (
    <div className="genBookDetailsSection">
      <h3>General book details</h3>

      <div id="genBookDetailsBlock">
        <div className="input-group-sm">
          <div className="row">
            <label htmlFor="authorName" className="form-label col-3 bookDetail">
              Author
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control generalDetailInput"
                id="authorName"
                {...register("authorName")}
              />
            </div>
          </div>

          <div className="row">
            <label
              htmlFor="pageNumbers"
              className="form-label col-3 bookDetail"
            >
              Page numbers
            </label>
            <div className="col-2">
              <input
                type="number"
                className="form-control generalDetailInput"
                id="pageNumber"
                min={0}
                {...register("pageNumber")}
              />
            </div>
          </div>

          <div className="row">
            <label htmlFor="publisher" className="form-label col-3 bookDetail">
              Publisher
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control generalDetailInput"
                id="puplisher"
                {...register("publisher")}
              />
            </div>
          </div>

          <div className="row">
            <label htmlFor="isSeries" className="form-label col-3 bookDetail">
              Series
            </label>
            <div className="col-4">
              <input
                type="text"
                className="form-control generalDetailInput"
                id="isSeries"
                {...register("series")}
              />
            </div>

            <label htmlFor="bookNumber" className="form-label col-1 bookDetail">
              Book
            </label>
            <div className="col-1">
              <input
                type="number"
                className="form-control generalDetailInput series"
                id="bookNumber"
                min={0}
                {...register("bookNumber")}
              />
            </div>

              <label htmlFor="ofSeries" className="col-1 form-label bookDetail">
                of
              </label>
              <div className="col-1">
              <input
                type="number"
                className="form-control generalDetailInput series"
                id="ofSeries"
                min={0}
                {...register("ofSeries")}
              />
            </div>
          </div>

          <div className="row">
            <label htmlFor="genre" className="form-label col-3 bookDetail">
              Genre
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control generalDetailInput"
                id="genre"
                {...register("genre")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
