import getAverageColor from 'get-average-color'

export const getAverageImageColor = async (imgPath: string) => {
  return getAverageColor(imgPath)
}
