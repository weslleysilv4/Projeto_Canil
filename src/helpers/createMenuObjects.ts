type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: menuOptions): object => {
  const returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }
  if (activeMenu !== '') {
    returnObject[activeMenu] = true
  }

  return returnObject
}
