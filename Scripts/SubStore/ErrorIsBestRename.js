function operator(proxies) {
  const result = proxies.filter((proxy) => filter_node(proxy.name));

  result.forEach((proxy) => {
    let name = proxy.name;
    name = get_node_name(name) + " " + get_node_order(name);
    proxy.name = "E " + name;
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
  const hk = new RegExp(/(🇭🇰)?香港|HK|HongKong/i);
  const jp = new RegExp(/(🇯🇵)?日本|JP|Japan/i);
  const tw = new RegExp(/(🇹🇼|🇨🇳)?台湾|tw|taiwan/i);
  const sg = new RegExp(/(🇸🇬)?新加坡|sg|singapore/i);
  const us = new RegExp(/(🇺🇸)?美国|us/i);

  switch (true) {
    case hk.test(node_name):
      return "🇭🇰 Hong Kong";
    case jp.test(node_name):
      return "🇯🇵 Japan";
    case tw.test(node_name):
      return "🇹🇼 Taiwan";
    case sg.test(node_name):
      return "🇸🇬 Singapore";
    case us.test(node_name):
      return "🇺🇸 United States";
    default:
      return "Other";
  }
}

function get_node_order(node_name = "") {
  const one = new RegExp(/\s?(\d{1})-/i);
  const two = new RegExp(/\s?(\d{2})-/i);

  switch (true) {
    case two.test(node_name):
      return node_name.match(two)[0].match(/\d+/)[0];
    case one.test(node_name):
      return "0" + node_name.match(one)[0].match(/\d+/)[0];
    default:
      return "S";
  }
}
