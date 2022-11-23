export const getRandomNumber = (min = 0, max = 1) => {
  const newMin = Math.ceil(min)
  const newMax = Math.floor(max)
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin)
}

export const getRandomNumbers = (min: number, max: number, amount: number) => {
  const randomNumbers: number[] = []

  while (randomNumbers.length < amount) {
    const randomNumber = getRandomNumber(min, max)
    if (!randomNumbers.some(number => number === randomNumber)) {
      randomNumbers.push(randomNumber)
    }
  }

  return randomNumbers
}

export const getXPositionInPercent = ({
  element,
  mouseX,
}: {
  element: HTMLElement
  mouseX: number
}) => {
  const rect = element.getBoundingClientRect()
  return Math.min(Math.max(0, mouseX - rect.x), rect.width) / rect.width
}

export function modulo(n: number, m: number) {
  return ((n % m) + m) % m
}
