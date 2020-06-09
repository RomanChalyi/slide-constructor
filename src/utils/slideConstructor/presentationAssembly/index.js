import getHeaderPresentation from './header'
import getBodyPresentation from './body'
import getFooterPresentation from './footer'

const putTogetherPresentation = (presentationData) => {
  const headerPresentation = getHeaderPresentation(presentationData)
  const bodyPresentation = getBodyPresentation(presentationData)
  const footerPresentation = getFooterPresentation(presentationData)
  return headerPresentation + bodyPresentation + footerPresentation
}

export default putTogetherPresentation
