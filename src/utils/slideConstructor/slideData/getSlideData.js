import { EMPTY } from '../../../constant'

//splits text into blocks
const getBlock = (text) => {
  const block = text.split('\n\n')
  return block.filter((couplet) => couplet !== '')
}

//splits block into slide
const getSlides = (block, linesOnSlide) => {
  const slides = block.reduce((acc, block) => {
    const lines = block.trim().split('\n')
    const quantitySlide = Math.ceil(lines.length / linesOnSlide)
    const blockSlides = []

    for (let i = 0, indexLine = 0; i < quantitySlide; i++, indexLine += linesOnSlide) {
      const slide = { text: [] }
      for (let j = 0; j < linesOnSlide; j++) {
        const line = lines[indexLine + j]
        if (typeof line !== 'undefined' && line.length > 0) {
          slide.text.push(line)
        }
      }
      blockSlides.push(slide)
    }
    acc.push(...blockSlides)

    return acc
  }, [])
  return slides
}

const getWidthOfText = (txt, fontsize, fontFamily) => {
  const canvas = document.createElement('canvas').getContext('2d')
  canvas.font = `bold ${fontsize}px ${fontFamily}`
  return canvas.measureText(txt).width
}

//adds font size for slide
const addSizeToSlide = (slides, maxFontSize, fontFamily, maxWidth) => {
  slides.map((slide) => {
    let fontSize = maxFontSize

    slide.text.forEach((line) => {
      let fontSizeSearch = true
      while (fontSizeSearch) {
        fontSizeSearch = false
        const lineWidth = getWidthOfText(line, fontSize, fontFamily)
        if (lineWidth > maxWidth) {
          fontSize -= 0.5
          fontSizeSearch = true
        }
      }
    })

    slide.fontSize = fontSize * 100
  })
  return slides
}

const addSlideType = (slides, type) => {
  slides.map((slide) => {
    slide.type = type
    return slide
  })
  return slides
}

const AddBlankSlideBeginningAndEnd = (slides) => {
  slides.unshift({ type: EMPTY })
  slides.push({ type: EMPTY })
}

const addBlankBesideSlide = (slides, blankBeginningAndEnd) => {
  const newSlide = []
  const indexFirstSlide = 0
  const indexLastSlide = slides.length - 1
  for (let i = 0; i < slides.length; i++) {
    newSlide.push(slides[i])
    if (
      (blankBeginningAndEnd && i === indexFirstSlide) ||
      (blankBeginningAndEnd && i === indexLastSlide) ||
      (blankBeginningAndEnd && i === indexLastSlide - 1)
    ) {
      continue
    }

    newSlide.push({ type: EMPTY })
  }
  return newSlide
}

const addIds = (slides) => {
  const quantitySlides = slides.length
  const getIds = (quantitySlides) => Array.from({ length: 6 + quantitySlides }, (v, k) => k + 1)
  console.log(getIds(quantitySlides), 'getIds')
  slides.map((slide, i) => {
    slide.id = i + 2
    return slide
  })
  return slides
}

const getSlideData = (formData) => {
  const { content, type, linesOnSlide, blankBeginningAndEnd, maxFontSize, fontFamily, maxWidth, blankBesideSlide } = formData
  const block = getBlock(content)
  let slides = getSlides(block, linesOnSlide)

  addSizeToSlide(slides, maxFontSize, fontFamily, maxWidth)

  addSlideType(slides, type)

  if (blankBeginningAndEnd) {
    AddBlankSlideBeginningAndEnd(slides)
  }
  if (blankBesideSlide) {
    slides = addBlankBesideSlide(slides, blankBeginningAndEnd)
  }

  addIds(slides)

  console.log(slides, 'slideBlock')
}

export default getSlideData
