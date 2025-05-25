import Navbar from "./_components/navbar";

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
