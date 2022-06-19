import {Routes, Route} from 'react-router-dom'
import React from 'react'
import App1 from 'app1/App'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home1"
          element={
            <div>
              <p>Home1</p>
            </div>
          }
        />
        <Route
          path="about1"
          element={
            <div>
              <p>Home2</p>
            </div>
          }
        />
        <Route path="contact2">
          <App1 />
        </Route>
      </Routes>
    </div>
  )
}

export default App
