// --------------------------------------------------------------------------
// π μ¬μ©μ μ μ μ λ€λ¦­ (User Define Generic)
// β­οΈ URL : https://bit.ly/3tqejSF
// --------------------------------------------------------------------------
// - μ¬μ©μκ° μ μν ν¨μκ° μ λ¬ λ°κ±°λ, λ°νν  νμμ μ λ€λ¦­μ μ¬μ©ν΄ μ μν  μ μμ΅λλ€.
// --------------------------------------------------------------------------

{
  // ν­λ± ν¨μ(Identity Function)
  // μ§ν© Xμ μμμ μμ xμ λνμ¬ f(x) = xμΈ ν¨μ
  // μ°Έκ³ : https://mathbang.net/474

  function identity(item) {
    return item;
  }

  // number νμ
  identity(101);

  // string νμ
  identity('101');

  type Cat = {
    name: string;
    breed: boolean;
  };

  // Cat νμ
  identity({
    name: 'hamrit',
    breed: false,
  });
}

{
  // π§ κ°λ³ νμλ§λ€ λμΌν λ‘μ§μ μ²λ¦¬νλ ν¨μλ₯Ό μμ±νλ κ²μ λΉν¨μ¨μ μλλ€.

  function getNumberRandomItem(list: number[]): number {
    return list[Math.floor(Math.random() * list.length)];
  }

  function getStringRandomItem(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)];
  }

  // μ¬λ¬ νμμ μ¬μ©μ μ€μ μ λ°λΌ νμ©νλ getRandomItem ν¨μλ₯Ό μμ±ν©λλ€.

  getRandomItem(['cat', 'dog']);
  getRandomItem([2, 3, 191, '223']);
}
