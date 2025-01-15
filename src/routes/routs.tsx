import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute, { HomeRoute } from "../auth/ProtectedRoute";
import ProductDetail from "pages/productDetail/ProductDetail";
import EditAddressView from "pages/address/editAddress/EditAddressView";
import AddressView from "pages/address/AddressView";
import TermsAndConditions from "pages/staticPages/TermsAndCondition";
import Faq from "pages/staticPages/Faq";
import PrivacyPolicy from "pages/staticPages/PrivacyPolicy";
import ReturnExchange from "pages/staticPages/ReturnExchange";
import RefundCancellation from "pages/staticPages/RefundCancellation";
import CartView from "pages/cart/CartView";
import CheckoutView from "pages/checkout/CheckoutView";
import DesignerView from "pages/designer/DesignerView";
import WishlistPage from "pages/staticPages/WishlistPage";
 


const ContactUs = lazy(() => import("../pages/staticPages/ContactUs"));
const ErrorPage = lazy(() => import("../pages/error/ErrorView"));
const HomePage = lazy(() => import("../pages/home/HomeView"));
const CategoryView = lazy(() => import("../pages/category/CategoryView"));
const AboutUs = lazy(() => import("../pages/staticPages/About"));
const StoreInfo = lazy(() => import("../pages/staticPages/OurStores"));
const ShippingInfo = lazy(() => import("../pages/staticPages/ShippingInfo"));
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
            path="/search/category/:categoryId?"
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
            path="/designer"
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
                <DesignerView />
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
            path="/store-locator"
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
                <StoreInfo />
              </Suspense>
            }
          />
          <Route
            path="/shipping"
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
                <ShippingInfo />
              </Suspense>
            }
          />

          <Route
            path="/terms-conditions"
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
                <TermsAndConditions />
              </Suspense>
            }
          />

          <Route
            path="/faqs"
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
                <Faq />
              </Suspense>
            }
          />

          <Route
            path="/privacy-policy"
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
                <PrivacyPolicy />
              </Suspense>
            }
          />

          <Route
            path="/returns-and-exchange"
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
                <ReturnExchange />
              </Suspense>
            }
          />

          <Route
            path="/refund-cancellation-policy"
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
                <RefundCancellation />
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

          <Route
            path="/cart"
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
                <CartView />
              </Suspense>
            }
          />

          <Route
            path="/checkout"
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
                <CheckoutView />
              </Suspense>
            }
          />

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

          <Route
            path="/address"
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
                <AddressView />
              </Suspense>
            }
          />

          <Route
            path="/add-address"
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
                <EditAddressView />
              </Suspense>
            }
          />

          <Route
            path="/edit-address/:addressId"
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
                <EditAddressView />
              </Suspense>
            }
          />
        </Route>


      




      </Routes>
    </Router>
  );
};

export default CustomRoute;
