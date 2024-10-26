const tracks = [
    { name: "Mockingbird", artist: "Eminem", url: "t1.mp3", cover: "cover1.jpg" },
    { name: "Hope", artist: "XXXTENTACION ", url: "t2.mp3", cover: "cover2.jpeg" },
    { name: "Ол Сен Емес", artist: "Кайрат Нуртас", url: "t3.mp3", cover: "cover3.jpeg" }
  ];
  
  let currentIndex = 0;
  const audio = new Audio();
  const cover = document.getElementById('cover');
  const trackName = document.getElementById('track-name');
  const playPauseButton = document.getElementById('play-pause');
  const nextButton = document.getElementById('next');
  const trackList = document.getElementById('track-list');
  
  //выгружаем треки
  function loadTrack(index) {
    audio.src = tracks[index].url;
    cover.src = tracks[index].cover;
    trackName.textContent = `${tracks[index].name} - ${tracks[index].artist}`;
    playPauseButton.textContent = 'Play';
  }//кеопки плэй пауз
  playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseButton.textContent = 'Play';
    }
  });
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % tracks.length;
    loadTrack(currentIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
  });
  //лист всех трэков
  tracks.forEach((track, index) => {
    const trackItem = document.createElement('li');
    trackItem.textContent = `${track.name} - ${track.artist}`;
    trackItem.addEventListener('click', () => {
      currentIndex = index;
      loadTrack(currentIndex);
      audio.play();
      playPauseButton.textContent = 'Pause';
    });
    trackList.appendChild(trackItem);
  });
  loadTrack(currentIndex);
  