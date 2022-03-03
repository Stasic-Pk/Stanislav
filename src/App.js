import './styles/main.css'

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
    <div>
      <Button>stas</Button>
      <Main className="block">
        <Button>l</Button>
      </Main>
    </div>
  )
}

export default App;

