export const findDateInSelected = (selectObj, selectArr, date) => {
	let find = Object.values(selectObj).find(s => s?.id === date.id)

	if (!find && selectArr.length) {
		for (let selectDate of selectArr) {
			let find = Object.values(selectDate).find(s => s.id === date.id)
			if (find) return !!find
		}
	}

	return !!find
}