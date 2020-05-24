const getIds = (quantitySlides) => Array.from({ length: 6 + quantitySlides }, (v, k) => k + 1);

export default getIds;
