import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />   
      </Route>
    </Routes>
  )
}