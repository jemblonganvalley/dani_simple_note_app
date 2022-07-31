import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/navbar/MainNavbar";
import LoadingPage from "./views/loading";

const Home = lazy(() => import("./views"));
const Register = lazy(() => import("./views/register"));
const Login = lazy(() => import("./views/login"));

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Login />
            </Suspense>
          }
        />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
