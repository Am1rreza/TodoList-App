import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container p-4 xl:max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
