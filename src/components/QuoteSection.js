import './QuoteSection.css'
import { AddQuoteButton } from "./AddQuoteButton"


export const QuoteSection = () => {


    return (
        <div className="quoteSection">
            <p className="fs-3">Quote(s)</p>
            <AddQuoteButton />
        </div>
    )
}