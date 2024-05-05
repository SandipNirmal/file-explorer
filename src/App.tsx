import Directory from './components/Directory'
import { Files } from './data/data'

function App() {
  return (
    <>
      <div>
      <h1>File Explorer</h1>
      <Directory {...Files} />
      </div>
    </>
  )
}

export default App
