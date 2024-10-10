import { Footer } from "./Footer";
import { Header } from "./Header";
type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="container mx-auto flex-grow mt-20 overflow-y-scroll">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
