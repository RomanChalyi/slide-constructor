import getSlideData from './slideData/getSlideData'
import putTogetherPresentation from './presentationAssembly'

const createPresentation = (formData) => {
  const start = new Date().getTime()
  const presentationData = getSlideData(formData)
  const end = new Date().getTime()
  const stringPresentation = putTogetherPresentation(presentationData)

  return new Blob([stringPresentation])
}

export default createPresentation
