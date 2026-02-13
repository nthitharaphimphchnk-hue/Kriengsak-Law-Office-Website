import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { JsonLd } from "./components/JsonLd";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { usePageTracking } from "./hooks/usePageTracking";
import Services from "./pages/Services";
import ServiceAccounting from "./pages/ServiceAccounting";
import ServiceAudit from "./pages/ServiceAudit";
import ServiceLegal from "./pages/ServiceLegal";
import About from "./pages/About";
import Knowledge from "./pages/Knowledge";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";

function Router() {
  // Track page views with Google Analytics and Umami
  usePageTracking();

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/services/accounting"} component={ServiceAccounting} />
      <Route path={"/services/audit"} component={ServiceAudit} />
      <Route path={"/services/legal"} component={ServiceLegal} />
      <Route path={"/about"} component={About} />
      <Route path={"/knowledge"} component={Knowledge} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/admin"} component={NotFound} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <JsonLd />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
