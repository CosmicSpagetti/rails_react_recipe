import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// create root element as div appended to page and render app component in it
console.log('hit this')
document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
});
