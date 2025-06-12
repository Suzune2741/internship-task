const isValid = (s: string) => {
  // ここにコードを書いてください
  //括弧どうしを関係づける
  const front: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];
  for (const c of s) {
    if (front[c]) {
      //開き括弧ならstackに積む
      stack.push(c);
    }else
    {
      //そうでなければstackからpop
      const before = stack.pop();
      //関係づけられている括弧と一致しているか確認
      if(front[before!] !== c)
        return false;
    }
  }
  return true;
};
let s = "()";
console.log(isValid(s)); // true
s = "({)}";
console.log(isValid(s)); // false
