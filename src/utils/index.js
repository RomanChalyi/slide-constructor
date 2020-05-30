import { SONG, PREACHING } from '../constant'

export const getDefaultSetting = (location) => {
  const url = location.pathname.split('/')
  const type = url[url.length - 1].toUpperCase()

  switch (type) {
    case SONG: {
      return { name: '', content: '', defaultName: true, emptyWrapper: true, extraEmptySlides: false, type: SONG }
    }

    case PREACHING: {
      return { name: '', content: '', defaultName: false, emptyWrapper: true, extraEmptySlides: true, type: PREACHING }
    }
    default: {
      return { name: '', content: '', defaultName: false, emptyWrapper: false, extraEmptySlides: false, type: PREACHING }
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
