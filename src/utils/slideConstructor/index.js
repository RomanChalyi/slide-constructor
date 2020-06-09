import getSlideData from './slideData/getSlideData'
import putTogetherPresentation from './presentationAssembly'

const createPresentation = (formData) => {
  const presentationData = getSlideData(formData)
  const stringPresentation = putTogetherPresentation(presentationData)
  console.log(presentationData, 'presentationData')
  return new Blob([stringPresentation])
}

export default createPresentation
