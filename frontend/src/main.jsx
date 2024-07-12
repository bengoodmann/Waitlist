import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider
        theme={theme}
        toastOptions={{
          defaultOptions: {
            position: "top-right",
            duration: 5000,
            isClosable: true,
            containerStyle: {
              width: "400px",
              maxWidth: "100%",
            },
          },
        }}
      >
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
