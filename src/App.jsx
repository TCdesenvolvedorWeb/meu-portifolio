import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { IconProvider } from "./Context/IconToggle";
import { ThemeProvider } from "./Context/ThemeToggle";
import { AppRoutes } from "./pages/Routes";

function App() {
  return (
    <ThemeProvider>
      <IconProvider>
      <GlobalStyle/>
      <AppRoutes />
      </IconProvider>
    </ThemeProvider>
  );
}

export default App;
