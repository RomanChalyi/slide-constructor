import { bodyPresentation } from './constants'
import getEmptySlide from './getEmptySlide'
import getSongSlide from './getSongSlide'
import getPreachingSlide from './getPreachingSlide'
import { SONG, EMPTY, PREACHING } from '../../../../constant'

const getBodySlides = (slides) => {
  const bodySlides = slides.reduce((acc, slide) => {
    switch (slide.type) {
      case EMPTY:
        return (acc += getEmptySlide(slide.index - 1))

      case SONG:
        return (acc += getSongSlide(slide))

      case PREACHING:
        return (acc += getPreachingSlide(slide))

      default:
        return acc
    }
  }, '')
  return bodySlides
}

const getBodyPresentation = (slides) => {
  const bodySlides = getBodySlides(slides)
  return bodySlides + bodyPresentation
}

export default getBodyPresentation
