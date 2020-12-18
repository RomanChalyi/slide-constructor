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
const widths = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0.2796875,
  0.2765625,
  0.3546875,
  0.5546875,
  0.5546875,
  0.8890625,
  0.665625,
  0.190625,
  0.3328125,
  0.3328125,
  0.3890625,
  0.5828125,
  0.2765625,
  0.3328125,
  0.2765625,
  0.3015625,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.2765625,
  0.2765625,
  0.584375,
  0.5828125,
  0.584375,
  0.5546875,
  1.0140625,
  0.665625,
  0.665625,
  0.721875,
  0.721875,
  0.665625,
  0.609375,
  0.7765625,
  0.721875,
  0.2765625,
  0.5,
  0.665625,
  0.5546875,
  0.8328125,
  0.721875,
  0.7765625,
  0.665625,
  0.7765625,
  0.721875,
  0.665625,
  0.609375,
  0.721875,
  0.665625,
  0.94375,
  0.665625,
  0.665625,
  0.609375,
  0.2765625,
  0.3546875,
  0.2765625,
  0.4765625,
  0.5546875,
  0.3328125,
  0.5546875,
  0.5546875,
  0.5,
  0.5546875,
  0.5546875,
  0.2765625,
  0.5546875,
  0.5546875,
  0.221875,
  0.240625,
  0.5,
  0.221875,
  0.8328125,
  0.5546875,
  0.5546875,
  0.5546875,
  0.5546875,
  0.3328125,
  0.5,
  0.2765625,
  0.5546875,
  0.5,
  0.721875,
  0.5,
  0.5,
  0.5,
  0.3546875,
  0.259375,
  0.353125,
  0.5890625,
]
function measureText(str, maxWidth) {
  const avg = 0.5279276315789471

  const width = str.split('').reduce((acc, elem) => {
    return acc + (elem.charCodeAt(0) < widths.length ? widths[elem.charCodeAt(0)] : avg)
  }, 0)
  return maxWidth / width
}
function round(value) {
  return Math.floor(value / 0.5) * 0.5
}

const getWidthOfText = (txt, fontsize, fontFamily) => {
  const canvas = document.createElement('canvas').getContext('2d')
  canvas.font = `bold ${fontsize}px ${fontFamily}`
  const width = canvas.measureText(txt).width

  canvas.font = ''
  return width
}

//adds font size for slide
const addSizeToSlide = (slides, maxFontSize, fontFamily, maxWidth) => {
  slides.map((slide) => {
    let fontSize = maxFontSize

    slide.text.forEach((line) => {
      const lineWidth = measureText(line, maxWidth)
      fontSize = round(lineWidth)

      // let fontSizeSearch = true
      // while (fontSizeSearch) {
      //   fontSizeSearch = false

      //   if (lineWidth * fontSize > maxWidth) {
      //     fontSizeSearch = true
      //     fontSize -= 0.5
      //   }
      // }
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
  slides.map((slide, i) => {
    slide.index = i + 2
    slide.id = Math.round(200 - 0.5 + Math.random() * (1900 - 200 + 1900))
    return slide
  })
  return slides
}

const getSlideData = ({ content, type, linesOnSlide, blankBeginningAndEnd, maxFontSize, fontFamily, maxWidth, blankBesideSlide }) => {
  
  const block = getBlock(content)

  let slides = getSlides(block, linesOnSlide)

  console.log('addSizeToSlide')
  const startAddSizeToSlide = new Date().getTime()
  addSizeToSlide(slides, maxFontSize, fontFamily, maxWidth)
  const endAddSizeToSlide = new Date().getTime()

  console.log(endAddSizeToSlide - startAddSizeToSlide, 'addSizeToSlide')
  const newslide = [...slides]
  addSlideType(slides, type)
  setTimeout(() => {
    console.log('addSizeToSlide')
    const startAddSizeToSlide1 = new Date().getTime()
    addSlideType(newslide, type)
    const endAddSizeToSlide1 = new Date().getTime()

    console.log(endAddSizeToSlide1 - startAddSizeToSlide1, 'addSizeToSlide')
  }, 3000)

  if (blankBeginningAndEnd) {
    AddBlankSlideBeginningAndEnd(slides)
  }
  if (blankBesideSlide) {
    slides = addBlankBesideSlide(slides, blankBeginningAndEnd)
  }

  addIds(slides)

  return slides
}

export default getSlideData

const tets = { a: 1 }
console.log(tets.a.v?.w)

const fn = (arr) => {
  arr.forEach((item) => {
    if (!(item % 3) && !(item % 5)) {
      console.log('foo bar')
    }
    if (!(item % 5)) {
      console.log('bar')
    }

    if (!(item % 3)) {
      console.log('foo')
    }
  })
}
