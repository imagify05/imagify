import { Textarea } from "@/components/ui/textarea";

export default function Dashboard() {
  return (
    <section>
      <div className="my-15 sm:my-32 max-w-xl mx-auto">
        <Textarea
          className="w-full p-4"
          placeholder="Describe what you want to generate..."
        />
      </div>
    </section>
  );
}
