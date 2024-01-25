function operator(proxies) {
  const result = proxies.filter((proxy) => filter_node(proxy.name));

  result.forEach((proxy) => {
    let name = proxy.name;
    name = replace_name(name.replace(/-[^\d].*/, "").replace("-", " "));
    proxy.name = "E " + name;
  });

  return result;
}

// * 与 filter 配合
function filter_node(node_name) {
  const reg = new RegExp(
    /邀请|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|到期|过期|已用|联系|邮箱|工单|群|贩卖|通知|倒卖|防止|国内|🎮|GAME|USE|USED|TOTAL|EXPIRE|EMAIL|Panel/
  );
  return !reg.test(node_name);
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
    hk: new RegExp(/香港|HK\s?(\d+.*$)/i),
    sg: new RegExp(/新加坡|SG\s?(\d+.*$)/i),
    tw: new RegExp(/台湾|TW\s?(\d+.*$)/i),
    jp: new RegExp(/日本|JP\s?(\d+.*$)/i),
    kr: new RegExp(/KR\s?(\d+.*$)/i),
    us: new RegExp(/美国|US\s?(\d+.*$)/i),
    ca: new RegExp(/CA\s?(\d+.*$)/i),
    de: new RegExp(/DE\s?(\d+.*$)/i),
    uk: new RegExp(/UK\s?(\d+.*$)/i),
    fr: new RegExp(/FR\s?(\d+.*$)/i),
    tr: new RegExp(/TR\s?(\d+.*$)/i),
  };
  const number_regexp = {
    first: new RegExp(/(\d{2}\s?.*)/),
    second: new RegExp(/(\d{1}\s?.*)/),
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
        countries_name[code] + " $1"
      );
      return node_name;
    }
  });
  return node_name;
}
