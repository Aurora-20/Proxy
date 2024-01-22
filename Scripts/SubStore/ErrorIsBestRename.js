function operator(proxies) {
  const other = /\(.+\)$|---|消耗/g;
  const hk = /香港|HK/;
  const sg = /新加坡|SG/;
  const us = /美国|US/;
  const jp = /日本|JP/;
  const tw = /台湾|TW/;
  proxies.forEach((proxy) => {
    proxy.name = proxy.name.replace(other, "");
    proxy.name = proxy.name.replace(/(\d\.\d+)/, "$1x");
    if (hk.test(proxy.name)) {
      proxy.name = proxy.name.replace(hk, "Hong Kong ");
    } else if (sg.test(proxy.name)) {
      proxy.name = proxy.name.replace(sg, "Singapore ");
    } else if (us.test(proxy.name)) {
      proxy.name = proxy.name.replace(us, "United States ");
    } else if (jp.test(proxy.name)) {
      proxy.name = proxy.name.replace(jp, "Japan ");
    } else if (tw.test(proxy.name)) {
      proxy.name = proxy.name.replace(tw, "Taiwan ");
    }
  });

  return proxies;
}
