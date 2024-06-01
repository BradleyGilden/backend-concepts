//  helper function that calculates pagination indices
const pageIndex = (page=1, limit=3) => {
  page = page === 0 ? 1: page;
  const start = (page - 1) * limit
  const end = (page * limit) - 1

  return { start, end };
}

export { pageIndex };
