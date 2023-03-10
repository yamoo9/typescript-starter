// ------------------------------------------------------------------------------
// π νν νμ (Tuples type)
// β­οΈ URL : https://bit.ly/3g6sdpR
// ------------------------------------------------------------------------------
// - ννμ TypeScriptμλ§ μ‘΄μ¬νλ νΉμν νμμλλ€. (JavaScriptμλ μ‘΄μ¬νμ§ μμ)
// - κ³ μ λ κΈΈμ΄μ λ°°μ΄μ λ§νλ©°, μ΄κ°μ± λ°°μ΄μ²λΌ νΉμ  νμμΌλ‘ μ λ ¬λλ λ°°μ΄μλλ€.
// ------------------------------------------------------------------------------

// μ«μ λλ λ¬Έμ νμμ ν­λͺ©μΌλ‘ νμ©νλ λ°°μ΄μ λ€μκ³Ό κ°μ΄ νμμ μ§μ ν  μ μμ΅λλ€.

{
  let stuff: Array<string | number> = ['μμλ³', 'νλΈλ¬', 'μ μλ μ§', 101];

  stuff = [202, 'TV', 'Radio'];
}

// κ°μ λ°©λ²μΌλ‘ RGBA νμμ μ§μ ν΄λ³΄μμ΅λλ€.
// κ·Έλ°λ° RGBA νμμ΄ μλͺ»λμμ΄λ μ€λ₯λ‘ κ°μ§νμ§ μλ€μ?
// μ€λ₯κ° κ°μ§λλλ‘ νμμ μ§μ ν΄λ΄λλ€.

{
  type RGBA = (number | string)[];

  let rgba: RGBA = [255, 255, 255, '34.5%'];

  // μλͺ»λ κ° νμ π
  rgba = ['30%', 100, 200, 0];
}

// HTTP_Response νμμ΄ μ μμ μΌλ‘ μλλλλ‘ νμμ μ§μ ν©λλ€.

{
  type HTTP_Response = [];

  const SUCCESS: HTTP_Response = [200, 'OK'];
  const NOT_FOUND: HTTP_Response = [404, 'NOT FOUND'];
  const STATUS: HTTP_Response[] = [SUCCESS, NOT_FOUND];
}
