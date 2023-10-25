// /**
//  * config
//  */
// // reviewFrontEnd  前端知识回顾
// const mdDemo1Config = require("../config/sidebarManage/mdDemo1");

// module.exports = {
//   // 基础准备
//   "/pages/pages/front-review/": [
//     "",
//     mdDemo1Config, // mdDemo1
//   ],
// };

import {
  vitePresspagesDemo1,
  vitePresspagesDemo2,
} from "../config/sidebarManage/mdDemo1/sdcoftest";

module.exports = {
  "/pages/demo1": vitePresspagesDemo1,
  "/pages/demo2": vitePresspagesDemo2,
};
