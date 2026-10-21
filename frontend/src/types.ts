export type ColumnData = {
  id: number;
  title: string;
  position: number;
};

export type CardData = {
  id: string | number;
  columnId: number;
  title: string;
};
