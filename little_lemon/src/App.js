import React from 'react';
import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Highlight from "./components/Highlight";
import Main from './components/Main';
import FootNav from "./components/FootNav";
import {AlertProvider} from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
    return (
        <ChakraProvider>
          <AlertProvider>
          <>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
            <NavBar/>
            <HeroSection/>
            <Highlight/>
            <Main/>
            <FootNav />
            <Alert />
          </>
        </AlertProvider>
      </ChakraProvider>
    );
  }
export default App;
