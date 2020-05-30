const getSlideData = (formData) => {
  //разить по слайдам [{value:'sdfsdfsdfENTER/sdfsdf}]
  //проверить на размер, переразить слайд при необзодимости [{value, size, type:song}]
  //добавить пустые в начале [{value,size, type:empty}]
  //добавить пустые через одного //
  //сгенерить id
  console.log(formData, formData)
  return formData
}

class Presentation {
  constructor(formData) {
    this.slides = getSlideData(formData)
    // this.filename = getPresentationName(formData) //лучше сделать на ui this.name = formData.presentationmae
  }
}

export default Presentation
