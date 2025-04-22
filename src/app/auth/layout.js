import Header from "../../../Components/Header";

export default function Layout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header />
      <main>{children}</main>
    </div>
  );
}
