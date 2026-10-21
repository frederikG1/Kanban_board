import type { ColumnData, CardData } from "../types";
import Droppable from "./Droppable";
import Card from "./Card";

type ColumnProps = {
  column: ColumnData;
  cards: CardData[];
};

export default function Column({ column, cards }: ColumnProps) {
  return (
    <div className="column">
      <h2>{column.title}</h2>
      <Droppable id={column.id} className="column-cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Droppable>
    </div>
  );
}
