import { Route, Routes } from "react-router-dom";

// context
import { ColorModeContext } from "./theme";

// hook
import { useMode } from "./theme";

// components
import Topbar from "./components/common/Topbar";
import Sidebar from "./components/common/Sidebar";

// pages
import Dashboard from "./pages/dashboard";
import Team from "./pages/team"
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";

// mui
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
