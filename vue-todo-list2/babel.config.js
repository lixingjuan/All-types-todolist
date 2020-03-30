/*
 * @version: 0.0.1
 * @Author: lixingjuan <xingjuan.li@hand-china.com>
 * @Date: 2020-02-05 20:41:02
 * @copyright: Copyright (c) 2019, Hand
 */
// module.exports = {
//   presets: ["@vue/cli-plugin-babel/preset"],
//   plugins: [
//     [
//       "import",
//       { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }
//     ]
//   ]
// };

module.exports = {
  presets: ["@vue/app"],
  plugins: [["import", { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }]]
};
