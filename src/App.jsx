import { BrowserRouter, Route, Routes } from 'react-router'
import Error404 from './components/Pages/Error404/error404.jsx'
import LinksList from './components/Pages/LinksList/linkList.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinksList />} />
        <Route path="/links" element={<LinksList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
