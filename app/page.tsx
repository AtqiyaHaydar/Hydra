import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="p-4 md:p-8 h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="rounded-lg w-full h-full p-2 md:p-4">
        <div className="border-2 border-white/5 rounded-xl w-full right-0 flex justify-between items-center px-4 py-2">
          <h1 className="md:text-xl font-light">KSEP Operations Project Manager</h1>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
