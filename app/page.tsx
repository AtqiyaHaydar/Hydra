import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="p-10 h-screen w-full overflow-hidden flex items-center justify-center">
      <div className=" bg-white/5 backdrop-blur rounded-lg w-full h-full p-4">
        <div className="w-full right-0 flex justify-between">
          <h1 className="text-1xl font-bold">KSEP Operations Project Manager</h1>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
