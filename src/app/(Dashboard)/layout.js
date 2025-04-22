import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

export default function Layout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
