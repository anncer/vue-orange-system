// 检测是否是数组 返回布尔值
export function isArray(arg: any[]): boolean {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
}

export function isObject(obj: object) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
// 检测是否是长度大于0的数组
export function isRealArray<T>(arr?: T[]) {
  return arr instanceof Array && arr.length > 0;
}

export function isString(str: any) {
  if (typeof str === "string" || str instanceof String) {
    return true;
  }
  return false;
}

// 检测是否是数组 不是则返回-1 是则返回长度
export const arrayLen = (arr: any[]) => {
  return isArray(arr) ? arr.length : -1;
};

// 检测对象是不是空对象
export const isEmptyObj = (obj: object) => {
  return Object.keys(obj).length <= 0;
};

// 检测是不是正整数
export const isNumber = (val: number): boolean => {
  const str = val.toString();
  const regPos = /^\d+(\.\d+)?$/; // 非负浮点数
  const regNeg =
    /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数

  return regPos.test(str) || regNeg.test(str);
};
// 检测对象是否是函数
export const isFunction = (fn: any) => {
  return typeof fn === "function";
};

// 判读是否非window对象
export const isWindow = (obj: any) => {
  return obj !== null && obj === obj.window;
};
// 判断参数是不是null
export const isNull = (ele: any) => {
  return ele === null;
};

// 判断参数是不是空，排除0
export const isNone = (some: any): boolean => {
  return some === 0 ? true : Boolean(some);
};

// 检测某个对象时候含有某个key
export function isProperty<T extends object>(obj: T, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export const getType = (target: any) => {
  return toString.call(target);
};

export const typeOf = (obj: any) => {
  const class2type: any = {};
  const typeList =
    "Boolean Number String Function Array Date RegExp Object Error Symbol";
  typeList.split(" ").forEach(function (name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  if (obj == null) {
    return String(obj);
  }
  return typeof obj === "object" || typeof obj === "function"
    ? class2type[toString.call(obj)] || "object"
    : typeof obj;
};

// 判断一个对象是不是素对象
export const isPlainObject = (obj: any) => {
  if (typeof obj !== "object" || obj.nodeType || isWindow(obj)) {
    return false;
  }
  try {
    if (obj.constructor && obj.constructor.prototype === Object.prototype) {
      return true;
    }
  } catch (e) {
    return false;
  }
};

// 检测某个对象是否为空，每个key都是空值
export const isEmpty = (obj: any) => {
  let _v = true;

  for (const key in obj) {
    if (obj[key]) {
      if (typeof obj[key] === "object" && obj[key] instanceof Array) {
        obj[key].length > 0 ? (_v = false) : (_v = true);
      } else if (typeof obj[key] === "object") {
        isEmpty(obj[key]);
      } else if (
        obj[key] != null &&
        obj[key] !== undefined &&
        obj[key] !== "null" &&
        obj[key] !== "undefined"
      ) {
        _v = false;
      }
    }
  }
  return _v;
};

/**
 * 浅比较两个object, json的key是否一致
 * @param obj1
 * @param obj2
 * @returns
 */
export function equalObjectKey(obj1: any, obj2: any): boolean {
  const obj1Keys: string[] = Object.keys(obj1);
  const obj2Keys: string[] = Object.keys(obj2);
  const obj1KeysLen: number = obj1Keys.length;
  if (obj1KeysLen !== obj2Keys.length) {
    return false;
  }
  let is = true;
  for (let index = 0; index < obj1KeysLen; index++) {
    const element: string = obj1Keys[index];
    if (!Object.prototype.hasOwnProperty.call(obj2, element)) {
      is = false;
      break;
    }
  }
  return is;
}

/**
 * 浅比较两个对象是否相等，这两个对象的值只能是数字或字符串
 * @param obj1
 * @param obj2
 * @returns
 */
export function equalObject(obj1: any, obj2: any): boolean {
  const obj1Keys: string[] = Object.keys(obj1);
  const obj2Keys: string[] = Object.keys(obj2);
  const obj1KeysLen: number = obj1Keys.length;
  const obj2KeysLen: number = obj2Keys.length;
  if (obj1KeysLen !== obj2KeysLen) {
    return false;
  }

  if (obj1KeysLen === 0 && obj2KeysLen === 0) {
    return true;
  }

  return !obj1Keys.some((key) => obj1[key] != obj2[key]);
}
