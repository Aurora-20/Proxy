let proxy = "ww12ww";

const reg = new RegExp(/(\d{2})(.+)/);
console.log(proxy);
proxy = proxy.replace(reg, "09 $2");
console.log(proxy);
