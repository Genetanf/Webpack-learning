console.log("Hello webpack");
console.log("two")


// 主程式
// 載入基本模組
//import "./lib.js";

// 載入模組輸出的資料
// import{x,y}from "./lib.js";
// console.log(x,y)

// 載入模組【預設】輸出的資料
// import{x}from "./lib.js";
// import data from "./lib.js";
// console.log(x,data)

// 混合使用
// import data,{x,y} from "./lib.js";
// console.log(x,y,data)

// 載入自己建立的函式庫模組
// import lib from "./lib.js";
// let result=lib.add(3,4)
// console.log(result);
// result=lib.multiply(3,4);
// console.log(result);



// 載入器
// 載入 SASS 樣式表
import "./style.scss"


// 補充
// 加入標題
import title from "./title.js"
document.body.appendChild(title)

// 加入列表
import list from "./list.js"
document.body.appendChild(list)