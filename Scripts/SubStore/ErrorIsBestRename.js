function operator(proxies = []) {
  const result = proxies.filter((proxy) => filter_node(proxy.name));

  result.forEach((proxy) => {
    let name = proxy.name;
    name = get_node_name(name) + " " + get_node_order(name);
    proxy.name = $arguments.prefix + " " + name;
  });

  return result;
}

// * 与 filter 配合
function filter_node(node_name = "") {
  const reg = new RegExp(
    /邀请|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|到期|过期|已用|联系|邮箱|工单|群|贩卖|通知|倒卖|防止|国内|🎮|GAME|USE|USED|TOTAL|EXPIRE|EMAIL|Panel/
  );
  return !reg.test(node_name);
}

function get_node_name(node_name = "") {
  switch (true) {
    case /(🇭🇰)?(香港|HK|HongKong)/.test(node_name):
      return "🇭🇰 Hong Kong";
    case /(🇯🇵)?(日本|JP|Japan)/.test(node_name):
      return "🇯🇵 Japan";
    case /(🇹🇼|🇨🇳)?(台湾|TW|Taiwan)/.test(node_name):
      return "🇹🇼 Taiwan";
    case /(🇸🇬)?(新加坡|SG|Singapore)/.test(node_name):
      return "🇸🇬 Singapore";
    case /(🇺🇸)?(美国|USA?)/.test(node_name):
      return "🇺🇸 United States";
    case /(🇰🇷)?(韩国|KR)/.test(node_name):
      return "🇰🇷 Korea";
    case /(🇬🇧)?(GB|UK|英国)/.test(node_name):
      return "🇬🇧 United Kingdom";
    case /(🇫🇷)?(法国|FR)/.test(node_name):
      return "🇫🇷 France";
    case /(🇩🇪)?(德国|DE)/.test(node_name):
      return "🇩🇪 Germany";
    case /(🇮🇳)?(印度|IND?)/.test(node_name):
      return "🇮🇳 India";
    case /(🇺🇦)?(乌克兰|UA|UKR)/.test(node_name):
      return "🇺🇦 Ukraine";
    case /(🇺🇦)?(乌克兰|UA|UKR)/.test(node_name):
      return "🇺🇦 Ukraine";
    case /(🇷🇺)?(俄罗斯|RUS?)/.test(node_name):
      return "🇷🇺 Russia";
    case /(🇹🇷)?(土耳其|TR)/.test(node_name):
      return "🇹🇷 Turkey";
    default:
      return "Other";
  }
}

function get_node_order(node_name = "") {
  const one = new RegExp(/\s?(\d{1})([^X|\s]|$)/i);
  const two = new RegExp(/\s?(\d{2})([^X|\s]|$)/i);

  switch (true) {
    case two.test(node_name):
      return node_name.match(two)[0].match(/\d+/)[0];
    case one.test(node_name):
      return "0" + node_name.match(one)[0].match(/\d+/)[0];
    default:
      return "S";
  }
}
