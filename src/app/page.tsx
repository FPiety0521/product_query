'use client'

import { useState } from "react"
import axios from "axios";
export default function Home() {
  const [keyword, setKeyword] = useState('womens shoes');
  const [products, setProducts] = useState([]);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  }
  
  const getProduct = () => {
    const options = {
      method: 'GET',
      url: 'https://target-com-shopping-api.p.rapidapi.com/product_search',
      params: {
        store_id: '1122',
        keyword: keyword,
        offset: '0',
        count: '9'
      },
      headers: {
        'X-RapidAPI-Key': 'e1e3aa51cbmsh94a35cc23838b53p1e4c62jsn0ad9f1f5faf3',
        'X-RapidAPI-Host': 'target-com-shopping-api.p.rapidapi.com'
      }
    };
    
    try {
      axios.request(options).then(p => setProducts(p.data.data.search.products));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <input onChange={handleKeyword} value={keyword} />
        <button type="submit" onClick={getProduct} >Search</button>
      </div>
      <div className="">
        {products && products.map((p, index) => 
          <div key={index}>
            {console.log(p.item.enrichment.images.primary_image_url)}
            <img src={p.item.enrichment.images.primary_image_url} />
            <div>{p.item.product_vendors[0].vendor_name}</div>
          </div>  
        )}
      </div>
    </main>
  )
}
