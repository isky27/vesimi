import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../store/redux.hooks";
import ProtectedRoute, { AuthRouteCheck, HomeRoute } from "../auth/ProtectedRoute";
import ProductDetail from "pages/productDetail/ProductDetail";


const LoginView = lazy(() => import("../pages/login/LoginView"));
const ErrorPage = lazy(() => import("../pages/error/ErrorView"));
const HomePage = lazy(() => import("../pages/home/HomeView"));
const CategoryView = lazy(() => import("../pages/category/CategoryView"));
const AboutUs = lazy(() => import("../pages/staticPages/About"));


/**
 * Component that defines all the routes for the website
 */
const CustomRoute = () => {

  const { loginDetails } = useAppSelector((state: any) => state.auth);


  return (
    <Router basename="/">
      <Routes>
        {/* LoginView route */}
        <Route
          path="/login"
          element={
            <AuthRouteCheck userDetails={loginDetails}>
              <Suspense
                fallback={
                  <div className="graph-loader  d-flex justify-content-center align-items-center">
                    <div className="spinner-border  spinner-ui d-flex justify-content-center align-items-center">
                      <span className="visually-hidden"></span>
                    </div>
                  </div>
                }
              >
                <LoginView />
              </Suspense>
            </AuthRouteCheck>
          }
        />
        <Route element={<HomeRoute/>}>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="graph-loader  d-flex justify-content-center align-items-center">
                  <div className="spinner-border  spinner-ui d-flex justify-content-center align-items-center">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              }
            >
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/category/:categoryId"
          element={
            <Suspense
              fallback={
                <div className="graph-loader  d-flex justify-content-center align-items-center">
                  <div className="spinner-border  spinner-ui d-flex justify-content-center align-items-center">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              }
            >
              <CategoryView />
            </Suspense>
          }
        />

<Route
          path="/about-us"
          element={
            <Suspense
              fallback={
                <div className="graph-loader  d-flex justify-content-center align-items-center">
                  <div className="spinner-border  spinner-ui d-flex justify-content-center align-items-center">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              }
            >
              <AboutUs />
            </Suspense>
          }
        />
          <Route
          path="/products/:productId"
          element={
            <Suspense
              fallback={
                <div className="graph-loader  d-flex justify-content-center align-items-center">
                  <div className="spinner-border  spinner-ui d-flex justify-content-center align-items-center">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              }
            >
              <ProductDetail/>
            </Suspense>
          }
        />
        </Route>

      
   

        {/* Protected routes for application panel*/}
        <Route element={<ProtectedRoute />}></Route>

        {/* ErrorPage route */}
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="graph-loader  d-flex justify-content-center align-items-center">
                  <div className="spinner-border  spinner-ui d-flex justify-content-center align-items-center">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              }
            >
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default CustomRoute;
