import { Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
import { Layout } from "antd";
import { jwtDecode } from "jwt-decode";
import Header from "./layout/Header";
import "./App.css";

interface User {
  accessToken: string;
}

const checkAuthorization = (
  user: User | null,
  navigate: (path: string) => void
): boolean => {
  if (!user) {
    return false;
  }

  const { accessToken } = user;

  if (accessToken) {
    const decoded = jwtDecode(accessToken);
    const currentTimestamp = Date.now() / 1000;
    if (decoded.exp !== undefined && decoded.exp < currentTimestamp) {
      localStorage.removeItem("user");
      return false;
    }
  } else {
    return false;
  }

  return true;
};

function App() {
  const navigate = useNavigate();
  const storedUser: string | null = localStorage.getItem("user");
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    const isAuthorized: boolean = checkAuthorization(user, navigate);

    if (!isAuthorized) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          {user && <Header />}
          <Routes>
            {user &&
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
