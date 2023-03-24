import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/mainPage'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </Router>
    </>
    )
}

export default App
