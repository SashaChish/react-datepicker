export const isLessId = (firstSelectId, currentSelectId) => {
  if (firstSelectId) {
    const currentIdSplit = currentSelectId.split('_')
    const firstIdSplit = firstSelectId.split('_')
    for (let i = 0; i < currentIdSplit.length; i++) {
      if (+currentIdSplit[i] < +firstIdSplit[i]) return true

      if (+currentIdSplit[i] > +firstIdSplit[i]) return false
    }

    return false
  }

  return false
}
