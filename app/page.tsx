import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="p-10 h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="border-2 border-white/10 backdrop-blur rounded-lg w-full h-full p-4">
        <div className="w-full right-0 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
