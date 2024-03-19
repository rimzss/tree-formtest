import { ThemeController } from "@/components/ThemeController";
import Tree from "@/components/Tree";
import TreeForm from "@/components/TreeForm";

export default function Home() {
  return (
    <main className="p-4 sm:p-16 w-screen h-screen flex gap-10">
      <Tree />
      <TreeForm />
    </main>
  );
}
