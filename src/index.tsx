import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'rc-slider/assets/index.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import "./scss/index.scss";
import "./scss/style.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import InterceptorApi from "./utils/InterceptorApi";
import { PersistGate } from 'redux-persist/integration/react';

InterceptorApi(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
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
        <App />
      </PersistGate>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
