import { useDraggable } from "@dnd-kit/react";
import type { CardData } from "../types";

type CardProps = {
  card: CardData;
};

export default function Card({ card }: CardProps) {
  const { ref } = useDraggable({
    id: card.id,
  });

  return (
    <div ref={ref} className="kanban-card">
      <p>{card.title}</p>
    </div>
  );
}
