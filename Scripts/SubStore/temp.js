function filter(proxies) {
  const reg =
    /邀请|返利|循环|官网|客服|网站|网址|获取|订阅|流量|到期|机场|下次|版本|官址|备用|到期|过期|已用|联系|邮箱|工单|群|贩卖|通知|倒卖|防止|国内|🎮|GAME|USE|USED|TOTAL|EXPIRE|EMAIL|Panel/;
  return proxies.filter((proxy) => {
    if (!reg.test(proxy.name)) {
      return true;
    }
    return false;
  });
}
