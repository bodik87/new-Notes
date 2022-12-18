export const data = [
  {
    id: 1,
    type: "note",
    title: "Plan for The Day",
    style: {
      color: "#EA7A53",
      background: "",
    },
    sections: [
      {
        id: 1,
        sectionType: "todoList",
        body: [
          { id: 1, isChecked: true, todoBody: "Buy food" },
          { id: 2, isChecked: false, todoBody: "GYM" },
          { id: 3, isChecked: false, todoBody: "Invest" },
          { id: 4, isChecked: false, todoBody: "Read a book" },
        ],
      },
      {
        id: 2,
        sectionType: "text",
        body: "This is body of first note",
      },
    ],
    favorite: true,
    folderId: 0,
    date: "13.12.2022",
  },
  {
    id: 2,
    type: "note",
    title: "Text of lecture",
    style: {
      color: "#A8D672",
      background: "",
    },
    sections: [
      {
        id: 1,
        sectionType: "text",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto reiciendis blanditiis est deleniti. Inventore tempore, atque, est ex, voluptate cumque sit accusamus doloremque veritatis dignissimos sprovident totam libero fugiat quos!",
      },
      {
        id: 2,
        sectionType: "text",
        body: "Inventore tempore, atque, est ex, voluptate cumque sit accusamus doloremque veritatis dignissimos sprovident totam libero fugiat quos!",
      },
      {
        id: 3,
        sectionType: "imagesList",
        body: [],
      },
    ],
    favorite: true,
    folderId: 0,
    date: "17.12.2022",
  },
  {
    id: 3,
    type: "note",
    title: "Images",
    style: {
      color: "#f7d44c",
      background: "../../public/img/wood.png",
    },
    sections: [
      {
        id: 1,
        sectionType: "imagesList",
        body: ["../../public/img/sample.png"],
      },
      {
        id: 2,
        sectionType: "text",
        body: "Voluptate cumque sit accusamus doloremque veritatis dignissimos sprovident totam libero fugiat quos!",
      },
      {
        id: 3,
        sectionType: "text",
        body: "Inventore tempore, atque, est ex, voluptate cumque sit accusamus doloremque veritatis dignissimos sprovident totam libero fugiat quos!",
      },
      {
        id: 4,
        sectionType: "todoList",
        body: [
          { id: 1, isChecked: false, todoBody: "Invest" },
          { id: 2, isChecked: false, todoBody: "Read a book" },
        ],
      },
    ],
    favorite: false,
    folderId: 0,
    date: "17.12.2022",
  },
  {
    id: 4,
    type: "folder",
    title: "My folder",
    favorite: true,
    notesID: [],
  },
  {
    id: 5,
    type: "note",
    title: "Second todo",
    style: {
      color: "#99B7DD",
      background: "",
    },
    sections: [
      {
        id: 1,
        sectionType: "text",
        body: "This is body of first note",
      },
      {
        id: 2,
        sectionType: "todoList",
        body: [
          { id: 4, isChecked: false, todoBody: "Read a book" },
          { id: 1, isChecked: true, todoBody: "Buy food" },
          { id: 3, isChecked: false, todoBody: "Invest" },
          { id: 2, isChecked: false, todoBody: "GYM" },
        ],
      },
      {
        id: 3,
        sectionType: "todoList",
        body: [
          { id: 3, isChecked: false, todoBody: "Invest" },
          { id: 4, isChecked: false, todoBody: "Read a book" },
        ],
      },
    ],
    favorite: false,
    folderId: 0,
    date: "13.12.2022",
  },
];
