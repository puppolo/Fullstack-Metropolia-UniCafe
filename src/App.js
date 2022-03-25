import { useState } from 'react'
import Result from './Result'

const Statistics = (props) => {
  if(props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <Result name={'good'} count={props.good} />
          <Result name={'neutral'} count={props.neutral} />
          <Result name={'bad'} count={props.bad} />
          <Result name={'all'} count={props.all} />
          <Result name={'average'} count={props.average} />
          <Result name={'positive'} count={props.positive} post={'%'} />
        </table>
      </div>  
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good+bad+neutral
  const average = ((good-bad)/all).toFixed(1)
  const positive = (good*100/all).toFixed(1)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App
