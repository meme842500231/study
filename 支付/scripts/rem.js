(function (doc, win) {
  /*
  参数1代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;
  参数2代表换算比例，这里写100是为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等
  */
  const rem = 100
  const width = 750
  const html = doc.getElementsByTagName("html")[0]
  const setFontSize = () => {
      let clientW = doc.documentElement.clientWidth || doc.body.clientWidth;
      if (!clientW) return
      html.style.fontSize = rem * (clientW / width) + "px";
  }
  // 优先执行一遍，防止页面忽小忽大
  setFontSize()
  /**
    * 事件：orientationchange->手机屏幕转屏事件
    * 事件：resize->页面大小改变事件(pc端有用)
    * 针对特定事件监听页面
    */
  const reEvt = "orientationchange" in win ? "orientationchange" : "resize"
  // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
  doc.addEventListener("DOMContentLoaded", setFontSize)
  win.addEventListener(reEvt, setFontSize)
})(document, window)