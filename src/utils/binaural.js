export const start = (leftRef, rightRef, left = 250, right = 253, volume = 0.04) => {
  leftRef.current = new (window.AudioContext || window.webkitAudioContent)();
  rightRef.current = new (window.AudioContext || window.webkitAudioContent)();

  const osc1 = leftRef.current.createOscillator(); //default frequency is 200HZ
  osc1.frequency.value = left;
  // leftRef.current.volume = 0.1;
  const osc2 = rightRef.current.createOscillator();
  osc2.frequency.value = right;
  // rightRef.current.volume = 0.1;

  const gainNode1 = leftRef.current.createGain();
  const gainNode2 = rightRef.current.createGain();
  gainNode1.gain.value = volume;
  gainNode2.gain.value = volume;

  const leftStereo = new StereoPannerNode(leftRef.current, { pan: -1 });
  const rightStereo = new StereoPannerNode(rightRef.current, { pan: 1 });

  // osc1.connect(leftStereo).connect(leftRef.current.destination);
  // osc2.connect(rightStereo).connect(rightRef.current.destination);

  osc1.connect(gainNode1).connect(leftStereo).connect(leftRef.current.destination);
  osc2.connect(gainNode2).connect(rightStereo).connect(rightRef.current.destination);

  // console.log("leftStereo", leftStereo);
  // console.log("osc1", osc1);
  // console.log("leftRef", leftRef.current);

  //Play
  osc1.start();
  osc2.start();
};

export const stop = (leftRef, rightRef) => {
  leftRef.current.suspend();
  rightRef.current.suspend();
};

export const createAudioSource = (url, vol = 0.5, loop = true) => {
  const audioElement = new Audio(url);

  // Set audio element properties
  audioElement.volume = vol;
  audioElement.loop = loop;

  // Wait for audio to load
  audioElement.addEventListener("canplaythrough", () => {
    // console.log(`${url} is loaded!`);
  });
  // audioElement.play();
  return audioElement;
};

export const binaural = {
  start,
  stop,
  createAudioSource,
};
