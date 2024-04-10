'use client'

import axios from 'axios'
import {useState, useEffect} from 'react'
import PricingCard from './pricingCard'


const PriceTables = ({stripeObj})=>{

    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetPrices()
    },[])

    const fetPrices = async ()=>{
        const {data} = await axios.get('/api/getproducts')
        setPrices(data)
        console.log(data)
    }

    return (
        <section>
            <div className='grid grid-cols-3  gap-8 items-center'>
                {prices.map((price, index)=>(
                    <PricingCard price = {price} key={price.id} stripeObj= {stripeObj}/>
                ))}
            </div>
        </section>
    )
}

export default PriceTables