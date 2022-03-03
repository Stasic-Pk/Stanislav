import './styles/main.css'
import TodoList from './Todo/TodoList'

function Main({children, ...props}) {
  return (
    <div {...props}>{children}</div>
  )
}

function Button({children}) {
  return (
    <div>{children}</div>
  )
}


function App() {
  return (
    <div className="wrapper">
      <h1>React totoriol</h1>
      <TodoList></TodoList>
    </div>
  )
}

export default App;

