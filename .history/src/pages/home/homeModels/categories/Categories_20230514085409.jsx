async function getCat() {
  await fetch('/api/products', { method: 'GET' })
    .then((res) => res.json())
    .then((json) => console.log(json))
}

getCat()
