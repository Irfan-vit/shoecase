import axios from 'axios'

expolrt const products = async function getCat() {
    const res = await axios.get('/api/products')
    const dat = res.data.products
    console.log(dat)
  }