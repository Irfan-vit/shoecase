import axios from 'axios'

expolrt const proasync function getCat() {
    const res = await axios.get('/api/products')
    const dat = res.data.products
    console.log(dat)
  }