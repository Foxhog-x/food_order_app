import { Header } from "./Header";
type Props = {
  children: React.ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <Header />
        <div className="container mx-auto">{children}</div>
      </div>
    </>
  );
};
