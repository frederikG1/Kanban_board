import { useDroppable } from "@dnd-kit/react";
import type { ReactNode } from "react";

type DroppableProps = {
  id: string | number;
  className?: string;
  children: ReactNode;
};

export default function Droppable({ id, className, children }: DroppableProps) {
  const { ref } = useDroppable({
    id,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
