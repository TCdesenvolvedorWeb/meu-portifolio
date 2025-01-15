import { IconProvider } from "./Context/IconToggle";
import { ThemeProvider } from "./Context/ThemeToggle";
import { AppRoutes } from "./pages/Routes";

function App() {
  return (
    <ThemeProvider>
      <IconProvider>
      <AppRoutes />
      </IconProvider>
    </ThemeProvider>
  );
}

export default App;
