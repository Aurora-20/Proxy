function operator(proxies) {
  const udpn_node = /\[(UDPN\s)(.+)X\]/;
  const normal_node = /\[(.+)X\]/;

  proxies.forEach((proxy) => {
    let name = proxy.name;
    // 倍率信息调整，UDPN 信息转换
    if (udpn_node.test(name)) {
      name = name.replace(udpn_node, "$2x*");
    } else if (normal_node.test(name)) {
      name = name.replace(normal_node, "$1x");
    }
    name = replace_name(name);
    // * prefix
    proxy.name = "M " + name;
  });
}

function replace_name(node_name) {
  //
  const countries_name = {
    hk: "Hong Kong",
    sg: "Singapore",
    tw: "Taiwan",
    jp: "Japan",
    kr: "Korea",
    us: "United States",
    ca: "Canada",
    de: "Germany",
    uk: "United Kingdom",
    fr: "France",
    tr: "Turkey",
  };
  const countries_regexp = {
    hk: new RegExp(/香港|HK(\s\d+.*$)/i),
    sg: new RegExp(/新加坡|SG(\s\d+.*$)/i),
    tw: new RegExp(/TW(\s\d+.*$)/i),
    jp: new RegExp(/JP(\s\d+.*$)/i),
    kr: new RegExp(/KR(\s\d+.*$)/i),
    us: new RegExp(/美国|US(\s\d+.*$)/i),
    ca: new RegExp(/CA(\s\d+.*$)/i),
    de: new RegExp(/DE(\s\d+.*$)/i),
    uk: new RegExp(/UK(\s\d+.*$)/i),
    fr: new RegExp(/FR(\s\d+.*$)/i),
    tr: new RegExp(/TR(\s\d+.*$)/i),
  };
  const number_regexp = {
    first: new RegExp(/(\d{2}\s?[^x].*)/),
    second: new RegExp(/(\d{1})\s?[^x].*/),
  };

  const countries_code = Object.keys(countries_regexp);

  if (number_regexp["first"].test(node_name)) {
    node_name = node_name.replace(number_regexp["first"], " $1");
  } else if (number_regexp["second"].test(node_name)) {
    node_name = node_name.replace(number_regexp["second"], " 0$1");
  }

  countries_code.forEach((code) => {
    if (code === "tw") {
      node_name = node_name.replace("🇨🇳", "🇹🇼");
    }

    if (countries_regexp[code].test(node_name)) {
      node_name = node_name.replace(
        countries_regexp[code],
        countries_name[code] + "$1"
      );
      return node_name;
    }
  });
  return node_name;
}

const name = "🇲🇾 Malaysia1";
console.log(replace_name(name));
