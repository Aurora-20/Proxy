/**
 * Update : 2023/11/01 14:55:44
 *
 * 1. 功能：为 SYN 已订阅用户快速在 SubStore 中添加低倍率节点；
 * 2. 请在 SubStore 中使用，具体使用：编辑->脚本操作->类型（链接）->
 * 填入本脚本链接（）；
 *
 */
const proxies = [
  {
    name: "🇭🇰 HK 乙酰氨基酚 S",
    type: "ss",
    server: "traffic-in-a.811920.xyz",
    port: 50001,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇭🇰 HK 次硝酸甘油 S",
    type: "ss",
    server: "traffic-in-a.811920.xyz",
    port: 50002,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇹🇼 TW 甲基苯丙酮 S",
    type: "ss",
    server: "traffic-in-a.811920.xyz",
    port: 50010,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇹🇼 TW 双氯芬酸钠 S",
    type: "ss",
    server: "traffic-in-a.811920.xyz",
    port: 50011,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇯🇵 JP 盐酸氨溴索 S",
    type: "ss",
    server: "traffic-in-ja.811920.xyz",
    port: 50003,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇯🇵 JP 磷酸肌酸钠 S",
    type: "ss",
    server: "traffic-in-ja.811920.xyz",
    port: 50004,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇸🇬 SG 羟苯磺酸钠 S",
    type: "ss",
    server: "traffic-in-01.811920.xyz",
    port: 50005,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇸🇬 SG 氨基酮戊酸 S",
    type: "ss",
    server: "traffic-in-01.811920.xyz",
    port: 50006,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇺🇸 US 盐酸可待因 S",
    type: "ss",
    server: "traffic-in-01.811920.xyz",
    port: 50007,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "🇺🇸 US 磺胺甲恶唑 S",
    type: "ss",
    server: "traffic-in-01.811920.xyz",
    port: 50008,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
  {
    name: "📽️ SP 四氟硼酸铜",
    type: "ss",
    server: "traffic-in-lite.811920.xyz",
    port: 50015,
    cipher: "aes-128-gcm",
    password: "e44fa4bf-9dd0-431c-828a-d2574d99793e",
    udp: true,
    subName: "Test",
  },
];

function operator(proxies) {
  /**
   * @param insertIndex: 插入元素的位置
   */
  let insertIndex = 0;
  /**
   * @param flag: 是否找到插入位置
   */
  let flag = false;
  // * 插入第一个元素（在 🇭🇰 的最后插入）
  for (const proxy of proxies) {
    // * 判断是否找到 🇭🇰
    if (/^🇭🇰.*$/.test(proxy.name)) {
      // * 找到插入位置
      flag = true;
    } else if (flag) {
      // * 🇭🇰 后的第一个元素
      flag = false;
      break;
    }
    // * 更新插入元素的位置
    insertIndex++;
  }
  // * 在 insertIndex 插入元素
  proxies.splice(
    insertIndex,
    0,
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50013,
      name: "🇭🇰 HK 丁香酰氧胺 0.01x",
    })
  );
  // * 重置插入元素位置
  insertIndex = 0;
  for (const proxy of proxies) {
    if (/^🇸🇬.*$/.test(proxy.name)) {
      flag = true;
    } else if (flag) {
      flag = false;
      break;
    }
    insertIndex++;
  }
  proxies.splice(
    insertIndex,
    0,
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50012,
      name: "🇸🇬 SG 苯巴比妥钠 0.01x",
    })
  );

  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50009,
      name: "🇱🇺 LU 硝酸二甲酯 0.01x",
    })
  );
  return proxies;
}

const result = operator(proxies);
console.log(result);
