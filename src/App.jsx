import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Login from "./pages/auth/login/Login";
import KelolaKonten from "./pages/kontent/KelolaKonten";
import Proyek from "./pages/proyek/Proyek";
import AiTools from "./pages/aitools/AiTools";
import Avatar from "./pages/avatar/Avatar";
import BrandKit from "./pages/brandKit/BrandKit";
import Test from "./pages/test/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/content" element={<KelolaKonten />} />
            <Route path="/proyek" element={<Proyek />} />
            <Route path="/tools" element={<AiTools />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/brandkit" element={<BrandKit />} />
          </Route>
          {/*  */}

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
