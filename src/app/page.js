import Image from "next/image";
import Header from "../../Components/Header";
import Login from "./auth/Login/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}
