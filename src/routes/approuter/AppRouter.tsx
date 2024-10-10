import { Route, Routes } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Menupage } from "../../pages/Menupage";
import { Cartpage } from "../../pages/Cartpage";
import { Homepage } from "../../pages/Homepage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/menu"
          element={
            <Layout>
              <Menupage />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <Layout>
              <Cartpage />
            </Layout>
          }
        />

        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};
