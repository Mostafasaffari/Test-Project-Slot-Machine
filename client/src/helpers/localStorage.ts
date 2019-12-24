interface IStorage {
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
  clear: (name: string) => void;
}

class MyLocalStorage implements IStorage {
  get = (name: string) => {
    return localStorage.getItem(name);
  };
  set = (name: string, value: string) => {
    localStorage.setItem(name, value);
  };
  clear = (name: string) => {
    localStorage.setItem(name, "");
  };
}
class CookieStorage implements IStorage {
  get = (name: string) => {
    return this.getCookie(name);
  };
  set = (name: string, value: string) => {
    this.setCookie(name, value);
  };
  clear = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  private setCookie = (
    cookieName: string,
    cookieValue: string,
    exdays = 10
  ) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/;`;
  };

  private getCookie = (cookieName: string) => {
    var name = cookieName + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
}

const cookieStore: IStorage = new CookieStorage();
const localStore: IStorage = new MyLocalStorage();

export { cookieStore, localStore };
