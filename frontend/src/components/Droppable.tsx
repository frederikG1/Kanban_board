import { useDroppable } from "@dnd-kit/react";
import type { ReactNode } from "react";

type DroppableProps = {
  id: string | number;
  children: ReactNode;
};

export default function Droppable({ id, children }: DroppableProps) {
  const { ref } = useDroppable({
    id,
  });

  return (
    <div ref={ref} style={{ width: 300, height: 300 }}>
      {children}
    </div>
  );
}
