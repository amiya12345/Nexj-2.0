import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Works from "../components/Works";

export default function Home() {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <Main />
      <Works />
    </div>
  );
}
