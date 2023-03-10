// ------------------------------------------------------------------------------
// ๐ DOM + ํ์ ๋จ์ธ (Type Assertions)
// โญ๏ธ URL : https://bit.ly/3O03mkh
// ------------------------------------------------------------------------------
// - TypeScript๋ฅผ ์ฌ์ฉํ  ๋ ๋ฐ์ดํฐ๊ฐ DOM ์์ ์์ ๋จ์ธํด ์ฌ์ฉํด์ผ ํ  ๊ฒฝ์ฐ๊ฐ ์ฆ์ต๋๋ค.
// ------------------------------------------------------------------------------

// ํ์ ๋จ์ธ, ์ต์คํด๋ ๋ฉ์ด์ ๋งํฌ ๋ฑ์ ์ฌ์ฉํด TypeScript๊ฐ ํ์์ ์ ์ ์์ด ํ์ํ ์ค๋ฅ๋ฅผ ํด๊ฒฐํฉ๋๋ค.

{
  const body = document.querySelector('body');
  const input = body.querySelector('input');

  body.addEventListener('click', (e) => {
    console.log('clicked body element');
  });

  input.addEventListener('input', () => {
    let value = input.value;
    console.log(value);
  });
}
