// --------------------------------------------------------------------------
// π λμΌ μ¬λΆ κ°λ (Equality Narrowing)
// β­οΈ URL : https://bit.ly/3fVA3CZ
// --------------------------------------------------------------------------
// - λμΌ νμ κ°λλ νΉμ  μμμ μννκΈ° μ  νμμ μλ‘ λΉκ΅νλ κ²μ λ§ν©λλ€.
// - λ κ°μ μλ‘ λΉκ΅ν΄ κ²μ¬νλ©΄ λ κ°μ΄ λμΌν μ§ νμΈ ν μμμ μ²λ¦¬ν©λλ€.
// --------------------------------------------------------------------------

{
  function isEqualityValue(
    value1: string | number,
    value2: string | boolean
  ): boolean {
    if (value1 === value2) {
      // value1, value2 λͺ¨λ string νμ
      console.log(value1.toLowerCase());
      console.log(value2.toLowerCase());
      return true;
    } else {
      // value1μ string λλ number νμ
      // value2λ string λλ boolean νμ
      console.log(value1);
      console.log(value2);
      return false;
    }
  }

  isEqualityValue(101, '101');
  isEqualityValue('EQUALITY', 'EQUALITY');
}
