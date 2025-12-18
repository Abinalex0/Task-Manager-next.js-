

import TaskCard from "@/components/TaskCard";

export const dynamic = "force-dynamic";

async function getTasks() {
  const res = await fetch("/api/tasks", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return res.json();
}

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Tasks</h1>

      <div className="flex flex-col gap-4">
        {tasks.map((task: any) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

