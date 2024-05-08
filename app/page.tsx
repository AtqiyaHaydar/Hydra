import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="p-4 md:p-8 w-full overflow-hidden flex flex-col gap-4 bg-dark h-screen">
      <Sidebar />
    </main>
  );
}
