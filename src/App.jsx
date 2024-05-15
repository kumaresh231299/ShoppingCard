import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductCard from './Components/ProductCard';

function App() {
  const [items, setItems] = useState([]);

  const data = [
    {
      id: 0,
      product: "Fancy Product",
      rate: "$40.00 - $80.00",
      sale: false,
      rating: false,
      offer: false,
      option: 1
    },
    {
      id: 1,
      product: "Special Item",
      oldrate: "$20.00",
      rate: "$18.00",
      sale: true,
      rating: true,
      offer: true,
      option: 2
    },
    {
      id: 2,
      product: "Sale Item",
      oldrate: "$50.00",
      rate: "$25.00",
      sale: true,
      rating: false,
      offer: true,
      option: 3
    },
    {
      id: 3,
      product: "Popular Item",
      rate: "$40.00",
      sale: false,
      rating: true,
      offer: false,
      option: 4
    },
    {
      id: 4,
      product: "Sale Item",
      oldrate: "$50.00",
      rate: "$25.00",
      sale: true,
      rating: false,
      offer: true,
      option: 5
    },
    {
      id: 5,
      product: "Fancy Product",
      rate: "$120.00 - $280.00",
      sale: false,
      rating: false,
      offer: false,
      option: 1
    },
    {
      id: 6,
      product: "Special Item",
      oldrate: "$20.00",
      rate: "$18.00",
      sale: true,
      rating: true,
      offer: true,
      option: 6
    },
    {
      id: 7,
      product: "Popular Item",
      rate: "$40.00",
      sale: false,
      rating: true,
      offer: false,
      option: 7
    }
  ]
  
  return (
    <div>
      <Navbar items={items} />
      <Header />
      <section className="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCard items={items} setItems={setItems} data={data} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App


