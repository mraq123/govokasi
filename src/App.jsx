// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login/Login";
import KelolaKonten from "./pages/kontent/KelolaKonten";
import Proyek from "./pages/proyek/Proyek";
import AiTools from "./pages/aitools/AiTools";
import Avatar from "./pages/avatar/Avatar";
import BrandKit from "./pages/brandKit/BrandKit";
import Settings from "./pages/setings/Settings";
import ProtectedRoute from "./pages/auth/protectedRoute/ProtectedRoute";
import Register from "./pages/auth/register/Register";
import Profile from "./pages/profile/Profile";
import DetailKelolaKontent from "./pages/kontent/DetailKelolaKontent";
import AiToolsDetail from "./pages/aitools/AiToolsDetail";
import DetailProyek from "./pages/proyek/DetailProyek";
import CreateVideo from "./pages/createVideo/CreateVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route login tidak dilindungi */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Semua route di dalam ProtectedRoute akan dilindungi */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/content" element={<KelolaKonten />} />
          <Route path="/proyek" element={<Proyek />} />
          <Route path="/tools" element={<AiTools />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/brandkit" element={<BrandKit />} />
          <Route path="/pengaturan" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detailkelolakonten" element={<DetailKelolaKontent />} />
          <Route path="/createvideo" element={<CreateVideo />} />
          <Route path="/detailaitools" element={<AiToolsDetail />} />
          <Route path="/detailproyek" element={<DetailProyek />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
