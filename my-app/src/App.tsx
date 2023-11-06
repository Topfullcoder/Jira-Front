import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes?.map((route, idx) => (
            <Route
              key={idx}
              element={<route.element />}
              path={route.path}
              index={route.index}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
