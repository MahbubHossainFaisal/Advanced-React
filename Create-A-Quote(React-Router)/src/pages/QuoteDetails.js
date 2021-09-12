import React from 'react'
import { useParams,Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_DATA = [
    {id:'p1', author: 'Mahbub', text: 'Learning JS is fun!'},
    {id:'p2', author: 'Hossain', text: 'Learning React is fun!'},
    {id:'p3', author: 'Faisal', text: 'Learning Node is fun!'}
]

const QuoteDetails = () => {
    const params = useParams()

    const quote = DUMMY_DATA.find(q => q.id === params.quoteId)

    if(!quote){
        return <p>Quote not found!</p>
    }

    return (
        <React.Fragment>
           <HighlightedQuote author={quote.author} text={quote.text}/>
           <Route path={`/quotes/${params.quoteId}/comments`}>
              <Comments />
           </Route>
        </React.Fragment>
    )
}

export default QuoteDetails
