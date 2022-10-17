import Cookies from "js-cookie";

enum CacheTe {
  local = "localStorage",
  session = "sessionStorage",
  cookie = "cookie"
}

class LocalCache {
  set(key: string, value: any, type: CacheTe = CacheTe.cookie) {
    if (type === CacheTe.cookie) {
      Cookies.set(key, value);
    } else {
      window[type].setItem(key, JSON.stringify(value));
    }
  }

  get(key: string, type: CacheTe = CacheTe.cookie) {
    let value: any;
    if (type === CacheTe.cookie) {
      value = Cookies.get(key);
    } else {
      value = window[type].getItem(key) || "";
    }
    if (value) {
      return value;
    }
    return null;
  }

  delete(key: string, type: CacheTe = CacheTe.cookie) {
    if (type === CacheTe.cookie) {
      Cookies.remove(key);
    } else {
      window[type].removeItem(key);
    }
  }

  clear(type: CacheTe = CacheTe.cookie) {
    if (type === CacheTe.cookie) {
      document.cookie
        .split(";")
        .forEach(
          (cookie) =>
            (document.cookie = cookie
              .replace(/^ +/, "")
              .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
        );
    } else {
      window[type].clear();
    }
  }
}

export default new LocalCache();
