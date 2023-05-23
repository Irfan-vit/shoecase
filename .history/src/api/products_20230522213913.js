import axios from 'axios'

expolrt const products = async => {
    const res = await axios.get('/api/products')
    const dat = res.data.products
    console.log(dat)
  }