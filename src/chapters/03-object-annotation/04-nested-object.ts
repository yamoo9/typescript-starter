// ------------------------------------------------------------------------------
// 📌 중첩된 객체 (Nested Objects)
// ⭐️ URL : https://bit.ly/3hG16SY
// ------------------------------------------------------------------------------
// - 객체가 객체를 중첩하더라도, 타입 에너테이션 작성 방법은 동일합니다.
// ------------------------------------------------------------------------------

// 아래 작성된 코드의 타입 별칭, 에너테이션을 설정합니다.

{
  const movieAinbo = {
    title: {
      ko: '아인보: 아마존의 전설',
      en: 'AINBO: SPIRIT OF THE AMAZON',
    },
    releaseDate: 2001,
    director: '호세 젤라다, 리처드 클라우스',
    summary: `
      신비의 숲 아마존 깊은 곳에 위치한 칸다모 마을.
      생명과 자연의 아름다움이 넘치던 칸다모는
      전설 속 악령 야쿠루나의 끔찍한 저주로 위험에 빠진다.
      
      최고의 사냥꾼을 꿈꾸는 소녀 ‘아인보’는 아마존을 구하기 위해
      자칭(?) 정령 안내자 ‘딜로’와 ‘바카’와 함께
      정글의 수호자 ‘모텔로 마마’를 찾아 떠난다.
      
      아마존의 숨겨진 비밀에 다가갈수록
      ‘아인보’ 자신이 생명의 땅을 되돌릴 선택 받은 존재라는 것을 알게 되는데…
      
      아마존이 선택한 소녀 영웅 ‘아인보’가 찾아온다!
    `,
    price: 22_000,
    vat: 0.1,
  };

  const printMovieTitle = (movie) => {
    let { title } = movie;
    console.log(`${title.ko} (${title.en})`);
  };

  const calcurateMoviePrice = (movie) => {
    let { price, vat } = movie;
    return price + price * vat;
  };

  printMovieTitle(movieAinbo);
  calcurateMoviePrice(movieAinbo);
}
