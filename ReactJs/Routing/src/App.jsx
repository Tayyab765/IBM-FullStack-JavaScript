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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product_view/:id" element={<ProductView />}></Route>

          <Route path="/dashboard" element={<Dashboard />}>
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
