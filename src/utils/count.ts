/* eslint-disable no-empty */
// 处理js计算浮点数问题
function accMul(arg1: number, arg2: number): number {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  try {
    if (s1.split(".")[1] !== undefined) {
      m += s1.split(".")[1].length;
    }
  } catch (e) {}
  try {
    if (s2.split(".")[1] !== undefined) {
      m += s2.split(".")[1].length;
    }
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}
// 加法
export const addition = (arg1: number, arg2: number): number => {
  let r1 = 0;
  let r2 = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  try {
    if (s1.split(".")[1] !== undefined) {
      r1 = s1.split(".")[1].length;
    }
  } catch (e) {}
  try {
    if (s2.split(".")[1] !== undefined) {
      r2 = s2.split(".")[1].length;
    }
  } catch (e) {}
  const m = Math.pow(10, Math.max(r1, r2));
  return (accMul(arg1, m) + accMul(arg2, m)) / m;
};

// 减法
export const subtraction = (arg1: number, arg2: number): number => {
  let r1, r2;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = Math.pow(10, Math.max(r1, r2));
  // 动态控制精度长度
  const n = r1 >= r2 ? r1 : r2;
  const str = ((arg1 * m - arg2 * m) / m).toFixed(n);
  return Number(str);
};

// 乘法
export const multiplication = (arg1: number, arg2: number): number => {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
};

// 除法
export const division = (arg1: number, arg2: number): number => {
  let t1 = 0;
  let t2 = 0;

  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  const r1 = Number(arg1.toString().replace(".", ""));
  const r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
};
