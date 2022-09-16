/* eslint-disable @typescript-eslint/no-this-alias */

import { isArray, isProperty, isPlainObject, isFunction } from "./comment";
// 获取当前时间的前几天或后几天
export const GetDateSomeDay = (AddDayCount: number) => {
  const dd = new Date();

  dd.setDate(dd.getDate() + AddDayCount);
  const y = dd.getFullYear();
  const m =
    dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();

  return y + "-" + m + "-" + d;
};

// 获取某个字符串在指定字符串中出现的位置(多个)
export const multipleIndexOf = (subStr: string, str: string) => {
  const positions = [];

  let pos = str.indexOf(subStr);

  while (pos > -1) {
    positions.push(pos);
    pos = str.indexOf(subStr, pos + 1);
  }
  return positions;
};

// 添加千位字符
export const addPercentage = (n: number | string): string => {
  const num = n.toString();
  let center = "";
  if (num === undefined) return num;
  center = num.toString().replace(/\$|,/g, "");
  const sign = num.indexOf("-") > 0 ? "-" : "";

  let cents = num.indexOf(".") > 0 ? num.substr(num.indexOf(".")) : "";

  cents = cents.length > 1 ? cents : "";
  center = num.indexOf(".") > 0 ? num.substring(0, num.indexOf(".")) : num;
  for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    center =
      num.substring(0, num.length - (4 * i + 3)) +
      "," +
      num.substring(num.length - (4 * i + 3));
  }
  return sign + center + cents;
};

// 判断返回number  正负数添加正负号
export const checkNum = (num: number) => {
  if (isNaN(num)) return "--";
  if (num > 0) {
    return "+" + addPercentage(num);
  }
  if (num < 0) {
    return "-" + addPercentage(num.toString().replace(/-/g, ""));
  }
  return addPercentage(num);
};

// reverse String
export const reverseStr = (str: string): string => {
  return str.split("").reverse().join("");
};

// 获取字符串的长度  中文计2
export const getRealLen = (str: string): number => {
  return str.replace(/[\u0391-\uFFE5]/g, "aa").length;
};

// 小数点补两位
export const returnFloat = (_value: number): string => {
  let value = String(Math.round(parseFloat(String(_value)) * 100) / 100);
  const xsd = value.toString().split(".");

  if (xsd.length === 1) {
    value = _value.toString() + ".00";
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = _value.toString() + "0";
    }
  }
  return value;
};

// 对象深拷贝
export const deepClone = (obj: any) => {
  const objClone: any = isArray(obj) ? [] : {};

  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (isProperty(obj, key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
};

export const extend = (...args: any) => {
  let options;

  let name;

  let src;

  let copy;

  let copyIsArray;

  let clone;

  let target = args[0] || {};

  let i = 1;
  const length = args.length;

  let deep = false;

  if (typeof target === "boolean") {
    deep = target;
    target = args[1] || {};
    i = 2;
  }
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }
  if (length === i) {
    target = this;
    --i;
  }
  for (; i < length; i++) {
    if ((options = args[i]) != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (
          deep &&
          copy &&
          (isPlainObject(copy) || (copyIsArray = isArray(copy)))
        ) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
};
