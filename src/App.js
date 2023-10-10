import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

import GlobalModalProvider from "./contexts/globalModalContext";
import GlobalSpinnerProvider from "./contexts/globalSpinnerContext";
import AuthProvider from "./contexts/authContext";

import PrivateRoute from "./components/HOC/PrivateRoute";
import GlobalModal from "./components/GlobalModal";
import GlobalSpinner from "./components/GlobalSpinner";
import Loading from "./components/Loading";

const LoginPage = lazy(() => import("./pages/LoginPage.js"));
const EmptyRoutePage = lazy(() => import("./pages/EmptyRoutePage.js"));
const MainPage = lazy(() => import("./pages/MainPage.js"));
const AccountPage = lazy(() => import("./pages/AccountPage.js"));

export default function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <GlobalSpinnerProvider>
          <GlobalModalProvider>
            <Box overflow={"hidden"} p={2}>
              <GlobalSpinner />
              <GlobalModal />
              <Router>
                <Switch>
                  <PrivateRoute path="/main">
                    <Suspense fallback={<Loading />}>
                      <MainPage />
                    </Suspense>
                  </PrivateRoute>
                  <PrivateRoute path="/account">
                    <Suspense fallback={<Loading />}>
                      <AccountPage />
                    </Suspense>
                  </PrivateRoute>
                  <Route path="/login">
                    <Suspense fallback={<Loading />}>
                      <LoginPage />
                    </Suspense>
                  </Route>
                  <Route path="/">
                    <Suspense fallback={<Loading />}>
                      <EmptyRoutePage />
                    </Suspense>
                  </Route>
                </Switch>
              </Router>
            </Box>
          </GlobalModalProvider>
        </GlobalSpinnerProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
