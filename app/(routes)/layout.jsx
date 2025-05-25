import Navbar from "./_components/navbar";
import CreditProvider from "@/utils/context/credit-context";

export default function Layout({ children }) {
  return (
    <CreditProvider>
      <section>
        <Navbar />
        {children}
      </section>
    </CreditProvider>
  );
}
