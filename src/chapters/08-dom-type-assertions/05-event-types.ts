// ------------------------------------------------------------------------------
// π μ΄λ²€νΈ + νμ (Event with Types)
// β­οΈ URL : https://bit.ly/3O2cDYS
// ------------------------------------------------------------------------------
// - DOM μμμ μ°κ²°λ μ΄λ²€νΈ νΈλ€λ¬μ μ΄λ²€νΈ κ°μ²΄ νμμ λͺμμ μΌλ‘ μ§μ νλ κ²μ΄ κΆμ₯λ©λλ€.
// ------------------------------------------------------------------------------

// μ΄λ²€νΈ κ°μ²΄κ° μλ¬΅μ μΌλ‘ any νμμΌλ‘ μΈμλ©λλ€.
// TypeScriptκ° μ νν μ΄λ€ μ΄λ²€νΈ κ°μ²΄ μμ μ μ μλλ‘ νμμ μ§μ ν΄λ΄λλ€.

{
  const body = document.querySelector('body')!;
  const input = body.querySelector('input')!;

  const handleClickBody = (e) => {
    console.log(e.target);
  };

  body.addEventListener('click', handleClickBody);

  const handleInput = (e) => {
    let value = e.target.value;
    console.log(value);
  };

  input.addEventListener('input', handleInput);
}
