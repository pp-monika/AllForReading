import { useForm, FormProvider } from "react-hook-form";
import { BookCoverSection } from "../components/BookCoverSection";
import { BookTitle } from "../components/BookTitle";
import { GeneralBookDetailsSection } from "../components/GeneralBookDetailsSection";
import { QuoteSection } from "../components/QuoteSection";
import { StatSection } from "../components/StatSection";
import { SummaryAndThoughtsSection } from "../components/SummaryAndThoughtsSection";
import "./JournalPage.css";
import { useEffect } from "react";

export const JournalPage = () => {

  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  // useEffect(() => {
  //   console.log("Form update.")
  //   console.log(methods.getValues())
  // }, [methods])

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="journalPageBookTitle col-12 gx-0">
              <BookTitle />
            </div>
          </div>
          <div className="row text-left">
            <div id="generalBookDetails" className="col-9 mainBody d-flex gx-0">
              <GeneralBookDetailsSection />
            </div>

            <div
              id="bookCover"
              className="col-3 text-center mainBody d-flex gx-0"
            >
              <BookCoverSection />
            </div>
          </div>

          <div className="row">
            <div className="col-5 mainBody gx-0">
              <QuoteSection />
            </div>

            <div className="col-7 mainBody gx-0">
              <div className="row mainBody gx-0">
                <StatSection />
              </div>

              <div className="row mainBody gx-0">
                <SummaryAndThoughtsSection />
              </div>
            </div>
          </div>

          <div className="row savePage">
            <div classname="col-12 float-end">
              <input type="submit" id="saveButton" />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
