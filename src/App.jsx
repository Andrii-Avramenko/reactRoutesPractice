import { Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./components/globalStyle"
import { Layout } from "./components/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
      <GlobalStyle />
    </>
  )
}

export default App
