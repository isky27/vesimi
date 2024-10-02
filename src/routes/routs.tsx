import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute, { HomeRoute } from "../auth/ProtectedRoute";
import ProductDetail from "pages/productDetail/ProductDetail";


const ContactUs = lazy(()=> import("../pages/staticPages/ContactUs"));
const ErrorPage = lazy(() => import("../pages/error/ErrorView"));
const HomePage = lazy(() => import("../pages/home/HomeView"));
const CategoryView = lazy(() => import("../pages/category/CategoryView"));
const AboutUs = lazy(() => import("../pages/staticPages/About"));
const AccountView = lazy(() => import("../pages/account/AccountView"));
const CareerView = lazy(() => import("../pages/staticPages/CareerView"));
const EditProfile = lazy(() => import("pages/account/edit/EditProfile"));



/**
 * Component that defines all the routes for the website
 */
const CustomRoute = () => {

  return (
    <Router basename="/">
      <Routes>
        <Route element={<HomeRoute />}>
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
            path="/category/:categoryId?"
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
                <ProductDetail />
              </Suspense>
            }
          />

          <Route
            path="/career"
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
                <CareerView />
              </Suspense>
            }
          />
            <Route
            path="/contact"
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
                <ContactUs />
              </Suspense>
            }
          />
        </Route>

        {/* Protected routes for application panel*/}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/account"
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
                <AccountView />
              </Suspense>
            }
          />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path="/edit-user"
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
                <EditProfile />
              </Suspense>
            }
          />
        </Route>


        <Route element={<ProtectedRoute />}>
          <Route
            path="/edit-user/:isChangePassword?"
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
                <EditProfile />
              </Suspense>
            }
          />
        </Route>

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
