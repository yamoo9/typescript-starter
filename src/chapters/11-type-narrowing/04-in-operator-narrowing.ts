// --------------------------------------------------------------------------
// π in μ°μ°μ νμ λ²μ μΆμ (in operator narrowing)
// β­οΈ URL : https://bit.ly/3Af3bf9
// --------------------------------------------------------------------------
// - JavaScript μΈμ΄μ in μ°μ°μλ κ°μ²΄μ νΉμ  μμ±μ΄ ν¬ν¨λμ΄ μλμ§ νμΈν  λ μ¬μ©ν©λλ€.
// - κ°μ²΄ μμ μ μ κ°μ²΄ νμμ λ°λΌ νΉμ  κ°μ΄ ν¬ν¨λμλμ§ νμΈν  λ μ¬μ©ν  μ μμ΅λλ€.
// --------------------------------------------------------------------------

{
  type Cat = {
    name: string;
    meow(): void;
  };

  type Dog = {
    name: string;
    bark(): void;
  };

  const talk = (creature: Cat | Dog) => {
    console.log(creature.name);
    // ν¬λ¦¬μ³(creature)κ° κ°μ§ μμ± ν¬ν¨ μ¬λΆ νμΈμ μν νμ λ²μ μΆμλ₯Ό μμ±ν©λλ€.
    creature.meow();
    creature.bark();
  };

  const kitty: Cat = {
    name: 'ν€ν°',
    meow() {
      console.log('λμΉ~');
    },
  };

  talk(kitty);
}

{
  interface Movie {
    title: string;
    duration: number;
  }

  interface TV_Drama {
    title: string;
    numberOfEpisodes: number;
    episodeDuration: number;
  }

  // λ¬΄λΉ, TV λλΌλ§ νμ λ³ μμμκ°μ λ¬Έμ  μμ΄ λ°ννλλ‘ νμ λ²μλ₯Ό μΆμν©λλ€.
  function getRuntime(media: Movie | TV_Drama): number | void {
    return media.episodeDuration * media.numberOfEpisodes;
    return media.duration;
  }

  getRuntime({
    title: 'μκ°μ κ±°μ€λ₯΄λ λ¨μ',
    duration: 62,
  });

  getRuntime({
    title: 'μ°λ¦¬ λ§μ μ΄μΌκΈ°',
    numberOfEpisodes: 12,
    episodeDuration: 48,
  });
}
