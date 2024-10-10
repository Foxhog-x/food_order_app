import { Route, Routes } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Menupage } from "../../pages/Menupage";

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
      </Routes>
    </>
  );
};
