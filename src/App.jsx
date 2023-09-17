import "./App.css";


import HomePage from "./Pages/HomePage"
function App() {
  return (
//using layout 
    <>
    <Routes>
      <Route path = "/" element={<HomePage/>}> </Route>
    </Routes>
    </>



  )
}



export default App;
