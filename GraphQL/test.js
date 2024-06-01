const query = (page, limit) => `
  query {
    books(page: ${page}, limit: ${limit}) {
      id
      name
    }
  }
`;

try {

  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query(2, 3)
    })
  })

  console.log(JSON.stringify(await response.json(), null, 2))

} catch(err) {
  console.log(err);
}
