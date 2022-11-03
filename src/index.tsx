import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const domRoot = document.getElementById("root")!;
const root = createRoot(domRoot);
root.render(<App />);