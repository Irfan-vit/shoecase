import {}

function App() {
  async function getCat() {
    const res = await axios.get('/api/products')
    const dat = res.data.products
    console.log(dat)
  }
  useEffect(() => {
    getCat()
  }, [])
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  )
}

export default App
