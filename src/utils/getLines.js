const getLines = (textSong) => {
  let couplets = textSong.split('\n\n');
  couplets = couplets.filter((couplet) => couplet !== '');
  const lines = couplets.reduce((acc, couplet) => {
    const coupletLines = couplet.trim().split('\n');
    if (coupletLines.length % 2) {
      coupletLines.push('');
    }
    acc.push(...coupletLines);
    return acc;
  }, []);
  return lines;
};
export default getLines;
