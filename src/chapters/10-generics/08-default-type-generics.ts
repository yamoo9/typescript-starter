// --------------------------------------------------------------------------
// π μ λ€λ¦­ κΈ°λ³Έ νμ (Generic Defaut Types)
// β­οΈ URL : https://bit.ly/3NZ5xod
// --------------------------------------------------------------------------
// - μ λ€λ¦­ λν κΈ°λ³Έ νμμ μ€μ ν  μ μμ΅λλ€.
// --------------------------------------------------------------------------

{
  function makeRepeatArray<T>(thing?: T, repeatCount: number = 2): T[] {
    return Array(repeatCount).fill(thing);
  }

  const numberList = makeRepeatArray(101);
  const stringList = makeRepeatArray('works');
  const arrayList = makeRepeatArray([true, () => {}]);

  // μλ¬΄λ° λ°μ΄ν°κ° μ λ¬λμ§ μμλ κΈ°λ³Έ νμμ΄ μ€μ λλλ‘ μ λ€λ¦­ κΈ°λ³Έ νμμ μ€μ ν©λλ€.
  const unknownList = makeRepeatArray();
}
