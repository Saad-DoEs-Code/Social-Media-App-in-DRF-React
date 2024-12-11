import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./routes/user_profile";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Routes>
            <Route element={<Layout> <UserProfile/> </Layout>} path="/:username" />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
