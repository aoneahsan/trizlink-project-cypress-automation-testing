export const isString = str => {
  return str && typeof str === 'string'
}
export const getRandomStr = () => {
  return Math.round(Math.random() * 100000000).toString()
}

export const generatePasswordString = (
  length = 8,
  includeUppercase = true,
  includeLowercase = true,
  includeNumbers = true,
  includeSpecialCharacters = true
) => {
  if (
    length < 1 ||
    (!includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSpecialCharacters)
  ) {
    return 'Please select at least one character type and length greater than 0!'
  }

  let result = ''

  if (includeUppercase) {
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]
  }

  if (includeLowercase) {
    result += 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]
  }

  if (includeNumbers) {
    result += '0123456789'[Math.floor(Math.random() * 10)]
  }

  if (includeSpecialCharacters) {
    result += '!@#$%^&*()_-+=<>?/[]{}|'[Math.floor(Math.random() * 25)]
  }

  const allCharacters =
    (includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
    (includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '') +
    (includeNumbers ? '0123456789' : '') +
    (includeSpecialCharacters ? '!@#$%^&*()_-+=<>?/[]{}|' : '')

  for (let i = result.length; i < length; i++) {
    result += allCharacters[Math.floor(Math.random() * allCharacters.length)]
  }

  // Shuffle the string to ensure randomness
  result = result
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')

  return result
}
