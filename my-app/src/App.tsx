import { Suspense, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
import { Layout } from "antd";
import { jwtDecode } from "jwt-decode";
// import { useSelector } from "react-redux";
// import { AppState } from "./redux/store";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [decodedToken, setDecodedToken] = useState({});
  const [isToken, setIsToken] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = user?.accessToken;

    if (token) {
      const decoded = jwtDecode(token);
      setDecodedToken(decoded);
      const currentTimestamp = Date.now() / 1000;
      if (decoded.exp !== undefined && decoded.exp < currentTimestamp) {
        navigate("/login");
      } else {
        setIsToken(true);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {isToken &&
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
