// --------------------------------------------------------------------------
// π ν΄λμ€ μ λ€λ¦­ (Generic Classes)
// β­οΈ URL : https://bit.ly/3EsmB2A
// --------------------------------------------------------------------------
// - ν΄λμ€μλ μ λ€λ¦­μ μ€μ ν  μ μμ΅λλ€.
// --------------------------------------------------------------------------

{
  interface Music {
    title: string;
    artist: string;
  }

  interface Movie {
    title: string;
    director: string;
    releaseDate: number;
  }

  class MoviePlaylist {
    #movieList: Movie[] = [];
  }

  class MusicPlaylist {
    #musicList: Music[] = [];
  }

  // Playlist ν΄λμ€λ₯Ό μ μνκ³  μ λ€λ¦­μ μ€μ ν©λλ€.
  // Playlist ν΄λμ€μ add(), remove() λ©μλλ₯Ό μΆκ°ν©λλ€.

  const myMusicPlaylist = new Playlist();
  myMusicPlaylist.add({ title: 'Rush Hour', artist: 'Crush' });

  const movie1: Movie = {
    title: 'μλ°±',
    director: 'μ€μ’μ',
    releaseDate: 2022,
  };
  const movie2: Movie = {
    title: 'μκ°μ κΏκΎΈλ μλ',
    director: 'λ°νμ§',
    releaseDate: 2023,
  };

  const myMoviePlaylist = new Playlist<Movie>([movie1, movie2]);

  myMoviePlaylist.remove(movie2);
}
