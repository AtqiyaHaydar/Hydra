import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="p-10 h-full w-full overflow-hidden">
      <div className="bg-white/10 backdrop-blur rounded-lg w-full h-full p-4">
        <ModeToggle />
      </div>
    </main>
  );
}
