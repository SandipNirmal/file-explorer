import Directory from './components/Directory'
import { Files } from './data/data'

function App() {
  return (
    <>
      <div>
      <h1>App</h1>
      <Directory {...Files} />
      </div>
    </>
  )
}

export default App
