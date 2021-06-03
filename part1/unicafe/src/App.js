import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

// display feedback stats
const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>all: {props.good + props.neutral + props.bad}</p>
      <p>average: {((props.good*1)+(props.bad*-1))/(props.good + props.neutral + props.bad)}</p>
      <p>positive: {(props.good / (props.good + props.neutral + props.bad)) * 100} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        handleClick={goodFeedback}
        text='good'
      />
      <Button
        handleClick={neutralFeedback}
        text='neutral'
      />
      <Button
        handleClick={badFeedback}
        text='bad'
      />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
