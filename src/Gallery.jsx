import { Footer } from "./Components/Footer";
import { Products } from "./Components/Products";
import { products as initalProducts } from "./mocks/products.json"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import './Styles/Fondo.css'
import './Styles/Gallery.css'
import { useState } from "react";
import { Filters } from "./Components/Filters";

export function Gallery () {
    const [sort, setSort] = useState(false);
    const [products] = useState(initalProducts)
    const [filters, setFilters] = useState({
        category: 'all',
        available: 'all'
    })

    const handleSort = () => {
        setSort(!sort);
      }

    const filterProducts = (products) => {
        const filteredProducts = products.filter(product => {
            if (filters.available === "all" || product.available === filters.available) {
                if (filters.category === "all" || product.category === filters.category) {
                    return true;
                }
            }
            return false;
        });
        if (sort) {
            return filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        }

        return filteredProducts;
    }

    const filteredProducts = filterProducts(products)

    return (
        <div className="Home">
            <div className="galeria">
                <motion.h1 initial="hidden" whileInView="visible" viewport={{once: true}}
                    transition={{duration:1}} variants={{ 
                    visible: {opacity:1, scale: 1.5}, hidden: {opacity:0, scale:0.5}
                    }} className='TituloJumbotron'>Nuestros Proyectos</motion.h1>
                <Filters sort={sort} handleSort={handleSort} handleChangeCategory={(e) => setFilters({...filters, category: e.target.value})}
                handleChangeAvailable={(e) => setFilters({...filters, available: e.target.value})}/>
                <Products products={filterProducts(products)}/>
                <Footer />
            </div>  
        </div>
    )
}