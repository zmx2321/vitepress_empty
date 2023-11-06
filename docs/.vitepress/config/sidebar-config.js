import * as examples from "./sidebar-manage/examples"; // examples

import * as sideDemo from "./sidebar-manage/side-demo"; // demo
import * as sideNote from "./sidebar-manage/side-note"; // note

module.exports = {
  // examples
  "/examples": examples.examples1Config,

  // demo
  "/pages/demo/demo1": sideDemo.demo1Config,
  "/pages/demo/demo2": sideDemo.demo2Config,
  "/pages/demo/demo3": sideDemo.demo3Config,

  // note
  "/pages/note/note1": sideNote.note1Config,
  "/pages/note/note2": sideNote.note2Config,
  "/pages/note/note3": sideNote.note3Config,
};
