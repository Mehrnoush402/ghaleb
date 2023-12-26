import React from 'react'
import ProductCart from './ProductCart'

const Products = () => {
  return (
    <div className='w-full flex flex-wrap gap-y-4 mt-6 justify-between'>
        <ProductCart src={require("../../../assets/images/Rectangle 1.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>
        <ProductCart src={require("../../../assets/images/Rectangle 2.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>
        <ProductCart src={require("../../../assets/images/Rectangle 3.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>
        <ProductCart src={require("../../../assets/images/Rectangle 4.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>
        <ProductCart src={require("../../../assets/images/Rectangle 5.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>
        <ProductCart src={require("../../../assets/images/Rectangle 6.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>
        <ProductCart src={require("../../../assets/images/Rectangle 7.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>
        <ProductCart src={require("../../../assets/images/Rectangle 8.png")} cost={85} classProduc={"w-[23%]"} productName={"Rounded neck - T shirt 100% Cotton"} materialProduct={"Organic Cotton, Fair Trade quality"}/>

    </div>
  )
}

export default Products