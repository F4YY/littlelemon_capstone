import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Highlight from "./components/Highlight";
import ReserveTable from "./components/ReserveTable";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FootNav from "./components/FootNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AlertProvider} from "./context/alertContext";
import Alert from "./components/Alert";
import Login from "./components/Login";

function App() {
    return (
        <ChakraProvider>
        <AlertProvider>
          <main>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            <NavBar/>
            <HeroSection/>
            <Highlight/>
            <ReserveTable/>
            <Login/>
            <Testimonials/>
            <About />
            <FootNav />
            <Alert />
          </main>
        </AlertProvider>
      </ChakraProvider>
    );
  }
export default App;
