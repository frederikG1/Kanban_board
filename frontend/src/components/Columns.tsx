import type { ColumnData } from "../types";
import Column from "./Column";
import Draggable from "./Draggable";


type ColumnsProps = {
  columns: ColumnData[];
  cardColumnId: string | number;
};

export default function Columns({ columns, cardColumnId }: ColumnsProps) {
  const draggable = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <div className="columns">
      {columns.map((column) => (
        <Column key={column.id} column={column}>
          {column.id === cardColumnId ? draggable : null}
        </Column>
      ))}
    </div>
  );
}
