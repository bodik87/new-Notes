type TypeStyle = {
  color: string;
  background: string;
};

export interface ITodo {
  id: number;
  isChecked: boolean;
  todoBody: string;
}

interface Section {
  id: number;
  sectionType: string;
  body: ITodo[] | string[];
}

export interface INote {
  id: number;
  type: string;
  title: string;
  style?: TypeStyle;
  sections?: Section[];
  favorite: boolean;
  folderId?: number;
  notesID?: number[];
  date?: string;
}
