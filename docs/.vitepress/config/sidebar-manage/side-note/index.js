const noteConfig1 = () => [
  {
    text: "note1-3",
    items: [
      /* {
        text: "demo1",
        link: "/pages/demo/demo1/",
      }, */
      ...require("./side-note-items/note1-config-items"),
      ...require("./side-note-items/note2-config-items"),
      ...require("./side-note-items/note3-config-items"),
    ],
  },
];
const noteConfig2 = () => [
  {
    items: require("./side-note-items/note1-config-items"),
  },
  {
    items: require("./side-note-items/note2-config-items"),
  },
  {
    items: require("./side-note-items/note3-config-items"),
  },
];

export const note1Config = noteConfig1();
export const note2Config = noteConfig1();
export const note3Config = [
  {
    text: "demo1",
    link: "/pages/demo/demo1/",
  },
  ...noteConfig2(),
];
