import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { Profile } from "./pages/Profile";
import DashboardHome from "./pages/DashboardHome";
import { Products } from "./pages/Products";
import { ProductView } from "./pages/ProductView";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {
  const loginStatus = false;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product_view/:id" element={<ProductView />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route
            path="/protected"
            element={<ProtectedRoute loggedIn={loginStatus} />}
          ></Route> */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute loggedIn={loginStatus}>
                <Dashboard />
              </ProtectedRoute>
            }
            c
          >
            <Route index element={<DashboardHome />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
