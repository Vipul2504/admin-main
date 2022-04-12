import Head from 'next/head'
import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import { useRouter } from 'next/router'
import Header from '../../components/common/Header'
import { addProducts } from '../../services/api'

const AddProduct = () => {

    const router = useRouter()

    const [formData, setFormData] = useState({
        name: '',
        subname: '',
        category: '',
        country: '',
        desc: '',
        gender: '',
        image: '',
        importer: '',
        price: "",
        salePrice: "",
        quantity: '',
        subname: '',
        thumbnail: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await addProducts(formData)
            router.push('/products')
        } catch (err) {
            console.log(err.response)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }


    return (
        <div className="min-h-screen w-full">
            <Head>
                <title>Furnito Official Website India</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Navbar />

            <main className="flex flex-col justify-center items-center mt-32">

                <div className='w-10/12'>
                    <Header />

                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-xl my-4'>Add Products</h1>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex w-full'>

                                <input type='text' name='name' className="w-full border outline-none mt-4 p-3 px-5 mr-2" placeholder="Enter Product Name..." onChange={handleChange} />

                                <input type='text' name='subname' className="w-full border outline-none mt-4 p-3 px-5 ml-2" placeholder="Enter Product SubName..." onChange={handleChange} />
                            </div>

                            <div className='flex w-full mt-4'>
                                <div className='w-1/2 mr-2'>
                                    <textarea type='text' name='desc' className="w-full border outline-none p-3 px-5 h-28" placeholder="Enter Product Desc..." onChange={handleChange} />
                                </div>

                                <div className='w-1/2 ml-2'>
                                    <select placeholder="Select Category" className='w-full outline-none border p-3' name='category' onChange={handleChange}>
                                        <option value="football-boots">Bed</option>
                                        <option value="running-shoes">Sofa</option>
                                        <option value="tracksuit">Kabbad</option>
                                        <option value="clothing">Chair</option>
                                        <option value="bags">Kitchen</option>
                                        <option value="accessories">Cabinet</option>
                                    </select>

                                    <select name='gender' placeholder="Select Gender" className='w-full p-3 border mt-4' onChange={handleChange}>
                                        <option value="BED">BED</option>
                                        <option value="SOFA">SOFA</option>
                                        <option value="KABBAD">KABBAD</option>
                                        <option value="CHAIRS">CHAIRS</option>
                                        <option value="KITCHEN">KITCHEN</option>
                                        <option value="CABINET">CABINET</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex w-full mt-4'>

                                <input type='text' name='country' onChange={handleChange} className="w-full border outline-none p-3 px-5 mr-2" placeholder="Enter Country Name..." />

                                <input type='text' name='importer' onChange={handleChange} className="w-full border outline-none p-3 px-5 ml-2" placeholder="Enter Importer Name..." />

                            </div>

                            <div className='flex w-full mt-4'>
                                <div className='w-1/2 flex mr-2'>
                                    <input type='number' name='price' onChange={handleChange} className="w-full border outline-none p-3 px-5 mr-2" placeholder="Enter Price..." />
                                    <input type='number' name='salePrice' onChange={handleChange} className="w-full border outline-none p-3 px-5 ml-2" placeholder="Enter Price..." />
                                </div>

                                <div className='w-1/2 ml-2'>
                                    <input type='number' name='quantity' onChange={handleChange} className="w-full border outline-none p-3 px-5" placeholder="Enter Quantity..." />
                                </div>
                            </div>

                            <div className='flex w-full mt-4'>
                                <div className='w-1/2 flex mr-2'>

                                    <input type='text' name='image' onChange={handleChange} className="w-full border outline-none p-3 px-5 mr-2" placeholder="Enter Image Link..." />

                                    <input type='text' name='thumbnail' onChange={handleChange} className="w-full border outline-none p-3 px-5 ml-2" placeholder="Enter Thumbnail Link..." />
                                </div>
                                <div className='w-1/2 ml-2'></div>
                            </div>

                            <div className='flex items-center justify-end m-4'>
                                <button type="submit" className="border-2 cursor-pointer bg-black text-white py-4 px-6 flex items-center uppercase font-bold">Add Product &nbsp;</button>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default AddProduct