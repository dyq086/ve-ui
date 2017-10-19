/*
 * @Author: yongqing.deng 
 * @Date: 2017-08-28 23:31:56 
 * @Last Modified by: yongqing.deng
 * @Last Modified time: 2017-10-18 14:42:15
 */

(function(doc, win) {
  
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth > 414) {
        clientWidth = 414;
      }
      var fz = 40 * (clientWidth / 750);
      docEl.style.fontSize = fz + "px";
    }();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
