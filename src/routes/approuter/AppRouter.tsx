import { Route, Routes } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Menupage } from "../../pages/Menupage";
import { Cartpage } from "../../pages/Cartpage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
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
      </Routes>
    </>
  );
};
