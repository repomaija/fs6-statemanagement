import { useFeedbackStats } from './Store'

const Statistics = () => {

  const { good, bad, neutral } = useFeedbackStats()
  
  const total = good + neutral + bad
  const all = good - bad
  const average = total ? all / total : 0
  const positive = total ? (good * 100) / total : 0

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr><td>good</td><td>{good}</td></tr>
          <tr><td>neutral</td><td>{neutral}</td></tr>
          <tr><td>bad</td><td>{bad}</td></tr>
          <tr><td>all</td><td>{total}</td></tr>
          <tr><td>average</td><td>{average}</td></tr>
          <tr><td>positive</td><td>{positive}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
