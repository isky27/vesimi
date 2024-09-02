import { Navigate, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useAppSelector } from "store/redux.hooks";
import { getLocalStorage } from "utils";
import Header from "component/headerLayout";
import Footer from "component/footerLayout";
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

  if (!loginDetails?.data?.token) {
    return <Navigate to="/" />;
  }

  return <section className="insight_top_wrapper">
    <div className="mainDashboard position-relative">
      {/* <SidebarLayout /> */}
      <div className="DashboardWrapper">
        {/* <HeaderLayout /> */}
        <div className="dashboardScreen">
          <Suspense
            fallback={
              <div className="graph-loader  d-flex justify-content-center align-items-center">
                <div className="spinner-border spinner-ui d-flex justify-content-center align-items-center" >
                  <span className="visually-hidden"></span>
                </div>
              </div>
            }
          >
            <div className="container-fluid">
              <Outlet />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  </section>
};

export default ProtectedRoute;
