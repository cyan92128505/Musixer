import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavigation from "./components/AppNavigation";
import ErrorBoundary from "./components/ErrorBoundary";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import NotFoundView from "./views/NotFoundView";
import ProfileView from "./views/ProfileView";
import RegisterView from "./views/RegisterView";
import ProtectedRoute from "./components/ProtectedRoute";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ErrorBoundary>
      <BrowserRouter>
        <AppNavigation />
        <Routes>
          <Route path="/register" element={<RegisterView />}></Route>
          <Route path="/login" element={<LoginView />}></Route>
          <Route path="/" element={<HomeView />} />
          <Route path="/" element={<ProtectedRoute outlet={<HomeView />} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                outlet={<ProfileView user={{ name: "", email: "" }} />}
              />
            }
          />
          <Route path={"*"} element={<NotFoundView />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </ChakraProvider>
);
