/*
* @Author: yongqing
* @Date:   2017-09-18 17:22:21
* @Last Modified by:   yongqing
* @Last Modified time: 2017-09-18 17:22:22
*/

"use strict";

const isColor = function(value) {
  const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
  const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
  const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;

  return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
};

export { isColor };
