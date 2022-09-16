import http from "@/utils/http";
import { getToken } from "@/utils/auth";

export default (path, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(xhr.responseText);
        } else {
          reject("error");
        }
      }
    };

    const url = http.resetUrl(path);

    // const path = http.host + "/" + url;

    xhr.open("POST", url, true);

    xhr.setRequestHeader("Authorization", getToken("Authorization"));

    xhr.send(data);
  });
};
