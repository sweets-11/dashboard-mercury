import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Appslidebar"
import { Home } from "./pages/Home";
import Capital from "./pages/Capital";
import Cards from "./pages/Cards";
import Payments from "./pages/Payments";
import { Tasks } from "./pages/Tasks";
import { Transactions } from "./pages/Transactions";
const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="lg:hidden" />
        <main className="ml-10 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/capital" element={<Capital />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/transactions" element={<Transactions caption="" />} />
          </Routes>
        </main>
      </SidebarProvider>
    </Router>
  );
};
export default App