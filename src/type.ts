type TypeStyle = {
  color: string;
  background: string;
};

interface Body {
  id: number;
  isChecked: boolean;
  todoBody: string;
}

interface Section {
  id: number;
  sectionType: string;
  body: string | Body[];
}

export interface INote {
  id: number;
  type: string;
  title: string;
  style: TypeStyle;
  sections?: Section[];
  favorite: boolean;
  folderId?: number;
  notesID?: number[];
  date?: string;
}
