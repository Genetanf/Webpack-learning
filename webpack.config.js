const path=require("path");
module.exports={
    // 建置的模式
    mode:"development",  // 預設 production
    // 入口
    entry:"./src/index.js",
    // 輸出
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    }
}