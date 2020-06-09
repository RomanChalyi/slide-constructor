import { FOOTER } from './constants'
import { EMPTY } from '../../../../constant'

const getAllTextSlide = (text) => {
  const allText = text.reduce((acc, line) => {
    return (acc += line + ' ')
  }, '')
  return allText
}

const getLpstr = (slides) => {
  const getLpstr = slides.reduce((acc, slide) => {
    if (slide.type === EMPTY) {
      return acc
    }
    const allText = getAllTextSlide(slide.text)

    acc += `<vt:lpstr>${allText}</vt:lpstr>`
    return acc
  }, '')
  return getLpstr
}

const getFooterPresentation = (slides) => {
  const lpstr = getLpstr(slides)
  return lpstr + FOOTER
}

export default getFooterPresentation
