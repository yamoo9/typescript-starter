// ------------------------------------------------------------------------------
// π νμ λ¨μΈ (Type Assertions)
// β­οΈ URL : https://bit.ly/3g3DtmU
// ------------------------------------------------------------------------------
// - `as` ν€μλλ₯Ό μ¬μ©ν΄ μ¬μ©μκ° νμμ λ¨μΈνλ©΄ TypeScriptλ λ μ΄μ κ²½κ³ νμ§ μμ΅λλ€.
// - `<TYPE>data` λ°©λ²μ μ¬μ©ν΄ `as` ν€μλ λ°©λ²μ λμ²΄ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// unknown νμμ΄λΌ μ μ μλ iDontKnow νμμ λ¨μΈν΄λ΄λλ€.

{
  let iDontKnow: unknown = 'μ΄λ€ νμμΈμ§ μ μ μμ΄μ.';

  let numberOfCharacters = iDontKnow.length;

  console.log(numberOfCharacters);
}

// bodyκ° μ°Έμ‘°νλ νμμ λ¨μΈν΄λ΄λλ€.

{
  const body: HTMLBodyElement | null = document.querySelector('body');

  body.addEventListener('click', (e) => {
    console.log('clicked body element');
  });
}
