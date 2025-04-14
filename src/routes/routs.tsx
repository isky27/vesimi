import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute, { HomeRoute, StandalonePage } from "../auth/ProtectedRoute";
const OrderSuccessView = lazy(() => import("../pages/orderSuccess/OrderSuccessView"));
const ProductDetail = lazy(() => import("../pages/productDetail/ProductDetail"));
const EditAddressView = lazy(() => import("../pages/address/editAddress/EditAddressView"));
const AddressView = lazy(() => import("../pages/address/AddressView"));
const TermsAndConditions = lazy(() => import("../pages/staticPages/TermsAndCondition"));
const Faq = lazy(() => import("../pages/staticPages/Faq"));
const PrivacyPolicy = lazy(() => import("../pages/staticPages/PrivacyPolicy"));
const ReturnExchange = lazy(() => import("../pages/staticPages/ReturnExchange"));
const RefundCancellation = lazy(() => import("../pages/staticPages/RefundCancellation"));
const CartView = lazy(() => import("../pages/cart/CartView"));
const CheckoutView = lazy(() => import("../pages/checkout/CheckoutView"));
const DesignerView = lazy(() => import("../pages/designer/DesignerView"));
const WishlistView = lazy(() => import("../pages/wishlist/WishlistView"));
const BlogView = lazy(() => import("../pages/blog/BlogView"));
const Feedback = lazy(() => import("../pages/feedback/Feedback"));
const ContactUs = lazy(() => import("../pages/staticPages/ContactUs"));
const ErrorPage = lazy(() => import("../pages/error/ErrorView"));
const HomePage = lazy(() => import("../pages/home/HomeView"));
const CategoryView = lazy(() => import("../pages/category/CategoryView"));
const AboutUs = lazy(() => import("../pages/staticPages/About"));
const StoreInfo = lazy(() => import("../pages/staticPages/OurStores"));
const ShippingInfo = lazy(() => import("../pages/staticPages/ShippingInfo"));
const AccountView = lazy(() => import("../pages/account/AccountView"));
const CareerView = lazy(() => import("../pages/staticPages/CareerView"));
const EditProfile = lazy(() => import("../pages/account/edit/EditProfile"));
const OrderHistoryView = lazy(() => import("../pages/orderHistory/OrderHistoryView"));
const OrderDetailsView = lazy(() => import("../pages/orderDetails/OrderDetailsView"));

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
            path="/feedback"
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
                <Feedback />
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
            path="/blog"
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
                <BlogView />
              </Suspense>
            }
          />
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
            path="/wishlist"
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
                <WishlistView />
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
            path="/wishlist"
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
                <WishlistView />
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

          <Route
            path="/order-history"
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
                <OrderHistoryView />
              </Suspense>
            }
          />

          <Route
            path="/order-details/:orderId"
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
                <OrderDetailsView />
              </Suspense>
            }
          />
        </Route>

        <Route element={<StandalonePage/>}>
          <Route
            path="/order-success"
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
                <OrderSuccessView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default CustomRoute;
