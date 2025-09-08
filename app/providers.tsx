'use client'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from "@react-oauth/google";
import store, { persistor } from "./store";
import InterceptorApi from "./utils/InterceptorApi";
import {ReactNode, useEffect} from "react";
import Header from "./component/headerLayout";
import Footer from "./component/footerLayout";
import ScrollToTop from "./component/ScrollToTop";

InterceptorApi(store);

export function Providers({ children }: { children: ReactNode }) {
    useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
      <>
        <ToastContainer
          data-testid="toast-container"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ""}>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </GoogleOAuthProvider>
          </PersistGate>
        </Provider>
      </>
  )
}
