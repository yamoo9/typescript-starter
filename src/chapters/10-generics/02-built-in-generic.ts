// --------------------------------------------------------------------------
// ๐ ๋นํธ์ธ ์ ๋ค๋ฆญ (Built-in Generics)
// โญ๏ธ URL : https://bit.ly/3hCmGYC
// --------------------------------------------------------------------------
// - TypeScript์๋ ์ด๋ฏธ ๋ด์ฅ๋ ์ ๋ค๋ฆญ์ด ์์ต๋๋ค.
// - DOM ์์๋ฅผ ์ ํํ๋ querySelector API๋ฅผ ํตํด ์ดํด๋ด๋๋ค.
// - TypeScript๊ฐ ์ถ๋ก ํ  ์ ์๋ ํ์์ ์ฌ์ฉ์๊ฐ ๋ช์์ ์ผ๋ก ์๋ ค์ค์ผ ํฉ๋๋ค.
// --------------------------------------------------------------------------

{
  // ๋ด์ฅ๋(built-in) ์ ๋ค๋ฆญ ํ์
  // ParentNode.querySelector<keyof HTMLElementTagNameMap>(selectors: keyof HTMLElementTagNameMap): Element | null

  // TypeScript โ DOM ์์ ํ์ ์ถ๋ก 
  // - ์ต์คํด๋ ๋ฉ์ด์(Exclamation)
  // - ํ์ ๋จ์ธ(Type Assertion)
  // - ์ ๋ค๋ฆญ(Generic)
  const inputEl = document.querySelector('#username');

  // ๐ง TypeScript ...
  // - inputEl ๋ณ์ ์ฐธ์กฐ๋ null์ผ ๊ฐ๋ฅ์ฑ์ด ์์ต๋๋ค.
  // - Element ํ์์ value ์์ฑ์ด ํฌํจ๋์ด ์์ง ์์ต๋๋ค.
  console.log(inputEl.value);

  const buttonEl = document.querySelector('.button');
  console.log(buttonEl.type);
}
