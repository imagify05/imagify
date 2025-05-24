import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <SignIn />
    </section>
  );
}
