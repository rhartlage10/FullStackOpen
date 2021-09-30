import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'

 const AnecdoteList = () => {

   const anecdotes = useSelector(state => state.anecdotes)
   const dispatch = useDispatch()

   const vote = (id) => {
     console.log('vote', id)

     dispatch(voteAnecdote(id))
   }

   return (
     <div>
       {anecdotes.map(anecdote =>
         <div key={anecdote.id}>
           <div>
             {anecdote.content}
           </div>
           <div>
             has {anecdote.votes}
             <button onClick={() => vote(anecdote.id)}>vote</button>
           </div>
         </div>
       )}
     </div>
   )
 }

 export default AnecdoteList