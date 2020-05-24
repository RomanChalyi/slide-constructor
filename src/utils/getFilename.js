const getFilename = (disableFilename, textSong, inputFilename) => {
  const firstLine = textSong.split('\n')[0];
  const lastLetter = firstLine[firstLine.length - 1];
  const characters = ':,!;.';
  let filename = characters.includes(lastLetter) ? firstLine.slice(0, -1) : firstLine;
  return disableFilename ? `${filename}.xml` : `${inputFilename}.xml`;
};

export default getFilename;
