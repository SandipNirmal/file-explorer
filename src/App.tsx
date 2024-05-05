import Explorer from './components/Explorer'
import { Files } from './data/data'

function App() {
  return (
    <>
      <div>
      <h1>File Explorer</h1>
      <Explorer {...Files} />
      </div>
    </>
  )
}

export default App
