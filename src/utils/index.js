import { SONG, PREACHING, MAX_WIDTH_SLIDE_SONG, MAX_WIDTH_SLIDE_PREACHING } from '../constant'

export const getDefaultSetting = (location) => {
  const url = location.pathname.split('/')
  const type = url[url.length - 1].toUpperCase()
  const generalSettings = { name: '', content: '', type, maxFontSize: 40, fontFamily: 'Arial' }
  switch (type) {
    case SONG: {
      return {
        ...generalSettings,
        defaultName: true,
        blankBeginningAndEnd: true,
        blankBesideSlide: false,
        lineBreak: false,
        linesOnSlide: 2,
        maxWidth: MAX_WIDTH_SLIDE_SONG,
      }
    }

    case PREACHING: {
      return {
        ...generalSettings,
        defaultName: false,
        blankBeginningAndEnd: true,
        blankBesideSlide: true,
        lineBreak: true,
        linesOnSlide: 1,
        maxWidth: MAX_WIDTH_SLIDE_PREACHING,
      }
    }
    default: {
      return {
        ...generalSettings,
        defaultName: false,
        blankBeginningAndEnd: false,
        blankBesideSlide: false,
        lineBreak: true,
        linesOnSlide: 1,
        type: 'default',
      }
    }
  }
}

export const getFilename = (content) => {
  const firstLine = content.split('\n')[0].trim()
  if (firstLine) {
    const lastLetter = firstLine[firstLine.length - 1]
    const characters = ':,!;.'
    return characters.includes(lastLetter) ? firstLine.slice(0, -1) : firstLine
  }
  return ''
}
