// ------------------------------------------------------------------------------
// π λ°°μ΄ μλνμ΄μ (Array Annotation)
// β­οΈ URL : https://bit.ly/3WR5sqy
// ------------------------------------------------------------------------------
// - λ°°μ΄μ κ°κ΄νΈ([])λ₯Ό μ¬μ©ν΄ νμ μλνμ΄μμ μ§μ ν  μ μμ΅λλ€.
// - type[] λ¬Έλ² λμ , Array<type> λ¬Έλ²μΌλ‘ λμ²΄ν  μ μμ΅λλ€.
// ------------------------------------------------------------------------------

// νΉμ  νμλ§ νμ©νλ λ°°μ΄ μλνμ΄μμ μ§μ ν©λλ€.

{
  const numberTypedArray = [10, 101, 201, 301];

  let total = numberTypedArray.reduce((total, value) => value + total, 0);
  console.log(total);

  numberTypedArray.push('901');

  const stringTypedArray =
    'annotation, inference, intersection, type alias'.split(',');
  console.log(stringTypedArray.length);

  stringTypedArray.unshift(true);
}

// booksApi νμ λ³μΉ­μ μ μΈν΄λ΄λλ€.

{
  type BooksAPI = {};

  const booksApi: BooksAPI = {
    version: '0.0.2',
    author: 'yamoo9@euid.dev',
    data: [
      {
        id: 'ISBN-9791191209563',
        title: 'λμ μΉκ΅¬ λ λ² μΉ΄',
        author: 'μΌμ΄νΈ λκΈλ¬μ€ μκΈ΄',
        image: {
          src: '/assets/9791191209563.jpeg',
          width: 458,
        },
        price: 13500,
      },
      {
        id: 'ISBN-9788943310141',
        title: 'λ λ² μΉ΄μ μμ κ·Ήμ₯',
        author: 'λ λ² μΉ΄ λνΈλ₯΄λ©λ₯΄',
        image: {
          src: '/assets/9788943310141.jpeg',
          width: 458,
        },
        price: 54000,
      },
      {
        id: 'ISBN-9791166113239',
        title: 'μ°μ μ νλ°©',
        author: 'νκ°μλΈ κ²μ΄κ³ ',
        image: {
          src: '/assets/9791166113239.jpeg',
          width: 458,
        },
        price: 13320,
      },
      {
        id: 'ISBN-9788937434051',
        title: 'νλμ μ­μ¬',
        author: 'λ―ΈμΈ νμ€ν¬λ‘',
        image: {
          src: '/assets/9788937434051.jpeg',
          width: 458,
        },
        price: 15120,
      },
      {
        id: 'ISBN-9791166113239',
        title: 'μ°μ±κ³Ό μ°μ ',
        author: 'μ μ§λͺ©',
        image: {
          src: '/assets/9791166113239.jpeg',
          width: 458,
        },
        price: 13500,
      },
      {
        id: 'ISBN-9791158888367',
        title: 'λΆμ¨ν νλ',
        author: 'μ μ΄λ΄',
        image: {
          src: '/assets/9791158888367.jpeg',
          width: 458,
        },
        price: 12420,
      },
      {
        id: 'ISBN-9788983451170',
        title: 'μ² κ°μ νλ',
        author: 'μ²μ λ',
        image: {
          src: '/assets/9788983451170.jpeg',
          width: 458,
        },
        price: 12600,
      },
    ],
  };
}
