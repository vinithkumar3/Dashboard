import { useEffect, useState } from "react";
import axios from "axios";
import Header from"./header";
import Footer from"./footer";
import Navigation from './Navigation';
import { ProductListStyled } from "./ProductListStyled";


const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setProducts(res.data.products)
            }).catch(err => {

            })
    }, [])

    return <><div class="section">
        <Header dashboardName={"Dashboard"} accountName={"Account"} isSearchVisible={true} SearchName={"Search"} />
        <div class="main">
        <Navigation />

        <ProductListStyled  >

            <table className="width-100">
                <tr>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Category</th>
                </tr>
                {products.map(value => {
                    return <tr>
                        <td>{value.title}</td>
                        <td>{value.brand}</td>
                        <td>{value.category}</td>
                    </tr>
                })}
            </table>
        </ProductListStyled>
    </div>
    </div>
        <Footer />
    </>
}

export default ProductList