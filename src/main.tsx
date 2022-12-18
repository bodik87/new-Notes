import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { FolderPage } from "./pages/FolderPage";
import { NotePage } from "./pages/NotePage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="folder/:folderId" element={<FolderPage />} />
      <Route path="note/:noteId" element={<NotePage />} />
      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} loader={redirectIfUser} />
        <Route path="logout" />
        // loader={({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   })
        // }
      </Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
