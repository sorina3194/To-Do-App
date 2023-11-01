export function addList(title, items) {
  const data = getLists()
  data.push({ title: title, items: items })
  localStorage.setItem('data', JSON.stringify(data))
}

export function updateList(title, items) {
  const data = getLists()
  const current = data.find((list) => list.title === title)
  current.items = items
  localStorage.setItem('data', JSON.stringify(data))
}

export function removeList(title) {
  const data = getLists()
  const index = data.findIndex((list) => list.title === title)
  data.splice(index, 1)
  localStorage.setItem('data', JSON.stringify(data))
}

/**
 * @returns {{
 *  title: string,
 *  items: {
 *    title: string,
 *    description: string,
 *    dueDate: string,
 *    priority: string,
 *    isDone: boolean
 *  }[]
 * }[]}
 */
export function getLists() {
  try {
    const strData = localStorage.getItem('data');
    const data = JSON.parse(strData);
    return data
  } catch (e) {
    console.error('error parsing local storage', e)
    return []
  }
}
