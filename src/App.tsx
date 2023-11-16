import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./assets/theme";
import Presentation from "./layouts/pages/presentation";
import routes from "./routes";

import "./App.css";
import Layout from "./layouts/pages/layout";
import { pagesRoutes } from "./utils/const/pageRoutes";

export default function App() {
  const getRoutes = (allRoutes: any[]): any =>
    allRoutes.map((route: any) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route path={route.route} element={route.component} key={route.key} />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          {getRoutes(routes)}
          {pagesRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="/presentation" element={<Presentation />} />
          <Route path="*" element={<Navigate to="/presentation" />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
