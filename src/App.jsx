import './App.css'

const App = ({name}) => {
  const today = new Date()
  let endChar = "s"
  if (name.slice(-1) == "s") {
    endChar = ""
  }
  return (
    <div>
      <p>{name}'{endChar} first React app ⚛️.</p>
      <p>Made today: {today.toDateString()}</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}
export default App;