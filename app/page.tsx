import AddTask from "@/components/AddTask";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="p-4 md:p-8 w-full overflow-hidden flex flex-col gap-4">
      <Header />

      <div className="flex w-full">
        <AddTask />

        
      </div>
    </main>
  );
}
