import AddTask from "@/components/AddTask";
import CalendarToday from "@/components/CalendarToday";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="p-4 md:p-8 w-full overflow-hidden flex flex-col gap-4">
      <Header />
      <div className="w-full flex flex-col md:flex-row justify-between gap-2 md:gap-0">
        <AddTask />
        <div />
        <CalendarToday />
      </div>
    </main>
  );
}
