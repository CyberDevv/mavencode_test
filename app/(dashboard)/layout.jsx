import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <SubNavbar />
      {children}
    </main>
  );
}
