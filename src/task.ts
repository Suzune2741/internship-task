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
      stack.push(c);
    }else
    {
      const before = stack.pop();
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
