import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/redux.hooks";
import { getLocalStorage } from "utils";
import Header from "component/headerLayout";
import Footer from "component/footerLayout";
import { cartListDataApi } from "store/order/orderSlice";

// Returns Is user is logged in or not
export const useAuth = () => {
  const userdata: any = getLocalStorage("loginDetails");
  return userdata?.token
    ? { loggedIn: true, userdata }
    : { loggedIn: false, userdata };
};

// Checks AuthRouters and redirects them to dashboar
export const AuthRouteCheck = ({ children }: any) => {
  const isAuth = useAuth();

  if (!isAuth?.loggedIn) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

// Checks Routes except AuthRouters and redirects them to respective route or Login page
export const ProtectedRouteCheck = ({ children }: any) => {
  const isAuth = useAuth();
  if (isAuth?.loggedIn) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export const HomeRoute = () => {
  
  const { loginDetails } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  if (loginDetails?.access_token) {
    dispatch(cartListDataApi({user_id:loginDetails?.user?.id}))
  }

  return <section>
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </section>
};

const ProtectedRoute = () => {
  const { loginDetails } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()

  if (!loginDetails?.access_token) {
    return <Navigate to="/" />;
  }
  dispatch(cartListDataApi({user_id:loginDetails?.user?.id}))
  
  return <section>
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </section>
};

export default ProtectedRoute;
