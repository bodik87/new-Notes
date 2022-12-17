export const data = [
  {
    id: 1,
    type: "note",
    title: "Plan for The Day",
    style: {
      color: "[#EA7A53]",
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
          { id: 1, isChecked: true, todoBody: "Buy food" },
          { id: 2, isChecked: false, todoBody: "GYM" },
          { id: 3, isChecked: false, todoBody: "Invest" },
          { id: 4, isChecked: false, todoBody: "Read a book" },
        ],
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
      color: "[#A8D672]",
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
    ],
    favorite: true,
    folderId: 0,
    date: "17.12.2022",
  },
  {
    id: 3,
    type: "folder",
    title: "My folder",
    style: {
      color: "bg-[#F6ECC9]",
      background: "",
    },
    favorite: true,
    notesID: [],
  },
];
