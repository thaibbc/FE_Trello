export const capitalizeFirstLetter = (val) => {
    if (!val) return ''
    return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
  }

export const geneneratePlanceholderCard = (column) =>{
  return {
    _id: `${column._id}-planceholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PleceholderCard: true
  }
}
