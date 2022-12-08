/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element: any, className: string) {
  if (!element || !className) {
    return;
  }
  let classString = element.className;
  const arr = classString.split(' ')
  if (arr.includes(className)) {
    const idx = arr.indexOf(className)
    arr.splice(idx, 1)
  } else {
    arr.push(className)
  }
  element.className = arr.join(' ');
}

// 获取一个元素的样式
export const getCss = (obj: any, attribute:any) => {
  if (obj.currentStyle) {
    return obj.currentStyle[attribute];
  } else {
    return window.getComputedStyle(obj, null)[attribute];
  }
};

/*
 * 获取元素位置
 */
export const getPoint = (obj:any) => {
  // 获取某元素以浏览器左上角为原点的坐标
  let t = obj.offsetTop; // 获取该元素对应父容器的上边距
  let l = obj.offsetLeft; // 对应父容器的上边距
  // 判断是否有父容器，如果存在则累加其边距
  const patent = obj.offsetParent;
  while (patent) {
    t += patent.offsetTop; // 叠加父容器的上边距
    l += patent.offsetLeft; // 叠加父容器的左边距
  }
  return {
    top: t,
    left: l
  };
};

/**
 * 截取字符串
 * @param {string}
 */
export const sliceFirst = (str: string) => {
  return str.slice(1);
};
/**
 * 根据传入的参数判断用id class查找元素
 * @param {string} .app #app
 */
export const getDom = (str: string) => {
  if (!str) return;
  if (/^\./.test(str)) {
    return document.getElementsByClassName(sliceFirst(str));
  } else if (/^#/.test(str)) {
    return document.getElementById(sliceFirst(str));
  } else {
    console.error("[getDom] Unmatched element");
  }
};
/**
 * 获取元素的所有父级, 目前只支持className
 * @param {Dom Object} value
 * @param {String} .xxxx
 */

export const getParents = (dom: any, clazz: string):any => {
  if (!isElement(dom)){
    return 'params error'
  }
  return getParentTags(dom, clazz);
};

const getParentTags = (startTag: any, clazz: any, parentTagList:any[] = []):any => {
  // 传入标签是否是DOM对象
  if (!(startTag instanceof HTMLElement))
    return console.error("receive only HTMLElement");
  // 父级标签是否是body,是着停止返回集合,反之继续
  const parent:any = startTag.parentElement;
  if ("BODY" !== parent.nodeName) {
    // 放入集合
    if (clazz) {
      if (hasClass(parent, clazz)) {
        parentTagList.push(parent);
      }
    } else {
      parentTagList.push(parent);
    }

    // 再上一层寻找
    return getParentTags(parent, clazz, parentTagList);
  }
  // 返回集合,结束
  else return parentTagList;
};

export const getParent = (dom:any) => {
  if (!isElement(dom)){
    return 'params error'
  }
  if (!(dom instanceof HTMLElement)) {
    return console.error("receive only HTMLElement");
  }
  return dom.parentElement;
};

// export const getParents = (dom, clazz) => {
//   if (!clazz) return null;
//   // const int = clazz.substr(0,1)
//   const list = this.getParentTag(dom);
//   const res = list.filter((item) => {
//     return item.className.includes(clazz);
//   });
//   return res.length > 0 ? res : null;
// };
/**
 * 创建对象，传入dom名称
 * @param {Dom Object} value
 * @param {String} dom name
 */
export const createDom = (name:any) => {
  return document.createElement(name);
};
/**
 * 设置元素的样式
 * @param {Dom Object/ String}
 * @param {Object}
 */
export const setStyle = (dom:any, obj:any) => {
  if (!isElement(dom)){
    return 'params error'
  }
  for (const key in obj) {
    dom.style[key] = obj[key];
  }
};
/**
 * 判断元素是不是element元素或者根元素
 */
export const isElement = (dom:any) => {
  return Boolean(dom && (dom.nodeType === 1 || dom.nodeType === 9));
};
/**
 * 判断字符串能不能查到元素，
 * 如果是，返回元素，不是则返回null
 */
export const getDomByStr = (name:any) => {
  let dom = null;
  if (typeof name === "string") {
    dom = getDom(name);
  } else if (isElement(name)) {
    dom = name;
  } else {
    console.error("[getDomByStr] param Error");
  }
  return dom;
};
/**
 * 设置元素的文字
 * @param {Dom Object} value
 * @param {String, Dom} .xxxx
 */
export const setText = (dom:any, text:any) => {
  if (!isElement(dom)){
    return 'params error'
  }
  if (dom) {
    dom.innerText = text;
  }
};

export const setClass = (dom:any, clazz:any) => {
  if (!isElement(dom)){
    return 'params error'
  }
  dom.className = clazz.trim();
};

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele:any, cls:any) {
  if (!cls || !isElement(ele)) {
    return 'hasClass: params error'
  }
  return Boolean(ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)")));
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele:any, cls:any) {
  if (!isElement(ele)){
    return 'params error'
  }
  const clsArr = cls.trim().split(' ')
  const hasedClazz = ele.className.split(' ')
  clsArr.forEach((clsItem: string) => {
      if (clsItem && !hasClass(ele, clsItem)) {
        hasedClazz.push(clsItem);
    }
  });
  ele.className = hasedClazz.join(' ')
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele:any, cls:any) {
  if (!isElement(ele)){
    return 'params error'
  }
  if (hasClass(ele, cls)) {
    const arr = ele.className.split(' ')
    const idx = arr.indexOf(cls.trim)
    arr.splice(idx, 1)
    ele.className = arr.join(' ');
  }
}

export const appendChild = (dom:any, doms:any) => {
  if (doms instanceof Array) {
    doms.forEach((it) => {
      dom.appendChild(it);
    });
  } else {
    dom.appendChild(doms);
  }
};

// 获取元素的子级，clazz为可选参数
export function getChildren(ele:any, clazz:any) {
  const eleChild = ele.children;
  const res = [];
  for (let i = 0; i < eleChild.length; i++) {
    const element = eleChild[i];
    if (clazz) {
      hasClass(element, clazz) && res.push(element);
    } else {
      res.push(element);
    }
  }
  return res;
}
