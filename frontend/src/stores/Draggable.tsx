import { useDraggable } from "@dnd-kit/react";
import type { ReactNode } from "react";

type DraggableProps = {
  id: string | number;
  children: ReactNode;
};

export default function Draggable({ id, children }: DraggableProps) {
  const { ref } = useDraggable({ id });
  return <button ref={ref}>{children}</button>;
}
