import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_DATA = [
    {id:'p1', author: 'Mahbub', text: 'Learning JS is fun!'},
    {id:'p2', author: 'Hossain', text: 'Learning React is fun!'},
    {id:'p3', author: 'Faisal', text: 'Learning Node is fun!'}
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_DATA}/> 
    )
}

export default AllQuotes
