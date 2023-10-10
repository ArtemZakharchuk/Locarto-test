import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

import GlobalModalProvider from "./contexts/globalModalContext";
import GlobalSpinnerProvider from "./contexts/globalSpinnerContext";
import AuthProvider from "./contexts/authContext";

import LoginPage from "./pages/LoginPage";
import EmptyRoutePage from "./pages/EmptyRoutePage";
import MainPage from "./pages/MainPage";
import AccountPage from "./pages/AccountPage";

import PrivateRoute from "./components/HOC/PrivateRoute";
import GlobalModal from "./components/GlobalModal";
import GlobalSpinner from "./components/GlobalSpinner";

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
                    <MainPage />
                  </PrivateRoute>
                  <PrivateRoute path="/account">
                    <AccountPage />
                  </PrivateRoute>
                  <Route path="/login">
                    <LoginPage />
                  </Route>
                  <Route path="/">
                    <EmptyRoutePage />
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
