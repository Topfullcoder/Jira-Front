import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { Layout } from "antd";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
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
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
