import { Route, Routes } from "react-router-dom";

// context
import { ColorModeContext } from "./theme";

// hook
import { useMode } from "./theme";

// components
import Topbar from "./components/common/Topbar";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team"

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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
