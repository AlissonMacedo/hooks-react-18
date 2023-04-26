
import WithoutHooks from './withoutHooks'
import WithHooks from './withHooks'

import './App.css'
import { Components, Container } from './styles'

function App() {
  return (
    <Container>
      <span>Listy of products</span>
      <Components>
        <WithoutHooks />
        <WithHooks />
      </Components>
    </Container>
  )
}

export default App
