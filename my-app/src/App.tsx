import { Suspense, useEffect, useState } from "react";
import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
import { Layout } from "antd";
import { jwtDecode } from "jwt-decode";
import Header from "./layout/Header";
import "./App.css";

const Authorization = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else {
      const token = user?.accessToken;
      if (token) {
        const decoded = jwtDecode(token);
        const currentTimestamp = Date.now() / 1000;
        if (decoded.exp !== undefined && decoded.exp < currentTimestamp) {
          localStorage.removeItem("user");
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    }
  }, [user]);

  return true;
};

function App() {
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          {Authorization() && <Header />}
          <Routes>
            {Authorization() &&
              privateRoutes?.map((route, idx) => (
                <Route
                  key={idx}
                  element={<route.element />}
                  path={route.path}
                  index={route.index}
                />
              ))}
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
      </Layout>
    </div>
  );
}

export default App;
