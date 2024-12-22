"use client"
import { FaStar } from "react-icons/fa"
import Image from "next/image";
import { useEffect, useState } from "react";

interface types {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }

}


export default function Clientside() {
    const [data, setData] = useState<types[]>([])

    useEffect(() => {
        const mencloth = async () => {
            let client = await fetch("https://fakestoreapi.com/products");
            let client2: types[] = await client.json();

            setData(client2)

        }
        mencloth()

    }, [])


    return (
        <>
            <div className="mt-[100px] flex justify-center items-center font-[600] text-[24px] sm:text-[32px] p-[30px] ">
                <h1>&quot;Client Side Data Fetching&quot;</h1>
            </div>

            <div className="mt-[10px] w-full  sm:h-[150px] flex items-center flex-col ">
                <div className="w-[80%] flex flex-col sm:flex-row ">
                    <div className="flex gap-2 items-center">
                        <div className="w-[20px] h-[40px] sm:ml-[36px]  bg-black"></div>
                        <h2 className="text-[24px] sm:text-[28px] font-[600] text-oranges"> All Products</h2>

                    </div>
                </div>
            </div>




            <div className="mt-[60px]">
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-[90%] h-auto flex flex-wrap  justify-center items-center gap-9 ">
                        {data.map((items, index) => (
                            <div key={index} className="flex  flex-wrap justify-center items-center " >
                                <div className="w-[300px] sm:w-[350px] h-auto bg-slate-200  pb-6 rounded-md">
                                    <div className="flex justify-center items-center overflow-hidden">
                                        <Image src={items.image} alt="loading pic" width={300} height={300} className="w-[300px] h-[300px]" />
                                    </div>

                                    <div className="text-left pt-6 text-[20px] font-[600] pl-5">
                                        <h1>{items.title}</h1>
                                    </div>

                                    <div className="text-center pt-6  text-[14px] ">
                                        <h1>{items.description.slice(0, 100)}...</h1>
                                    </div>
                                   
                                    <div className="text-left pt-6 pl-5 text-[18px] font-[500]   flex justify-between pr-4">
                                        <h1>${items.price}</h1>
                                        <p className=" flex items-center gap-1 text-yellow-500"><FaStar/>{items.rating.rate}</p>
                                    </div>
                                    <div className="text-right text-yellow-500 pr-3">
                                        <h1><p>({items.rating.count} reviews)</p></h1>
                                    </div>
                                   
                                    <div className=" ml-4 ">

                                        <button className="w-[100px] h-[40px] text-[16px] mt-4 border bg-black border-black rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-[0.5s] text-white">Buy now</button>


                                    </div>


                                </div>




                            </div>

                        ))}


                    </div>

                </div>

            </div>
        </>
    );
}
