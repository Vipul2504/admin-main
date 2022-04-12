import { useRouter } from "next/router"
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function ProductTable({ products, setProductState }) {

    const router = useRouter();

    const handleDelete = async (id) => {
        try {
            const res = await deleteProduct(id)
            setProductState(products.filter(e => e._id !== id))
            message.success('Product Deleted Succesfully 🎉')
        } catch (err) {
            console.log(err.response)
            message.error(err.response.data.msg)
        }
    }

    const handleEdit = (id) => {
        router.push(`/products/add?id=${id}`)
    }

    return (
        <div className="overflow-x-auto w-full py-2">
            <div className="overflow-hidden border-2 border-black border-t-0">
                <table className="w-full divide-y-2 divide-black">

                    <thead className="bg-black text-white">
                        <tr>
                            <th
                                scope="col"
                                className="py-3 px-6 text-left"
                            >
                                {/* <Checkbox /> */}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Product
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Stock
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-sm uppercase font-bold"
                            >
                                Price
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y-2 divide-black">
                        {products?.map((product) => (
                            <tr key={product._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* <Checkbox /> */}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="w-12" src={product.image} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-bold">{product.name}</div>
                                            <div className="text-sm text-gray-400">Original: ₹{product.price}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{product.quantity}</div>
                                    <div className="text-sm text-gray-500">{product.gender}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.salePrice}</td>
                                <td className="px-2 pt-6 items-center justify-center whitespace-nowrap text-2xl font-medium flex h-full">
                                    <p className="text-indigo-600 hover:text-indigo-900 mr-4 cursor-pointer" onClick={() => handleEdit(product._id)}>
                                        <AiFillEdit />
                                    </p>
                                    <p className="text-red-600 hover:text-red-400 cursor-pointer" onClick={() => handleDelete(product._id)}>
                                        <AiFillDelete />
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}