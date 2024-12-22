

interface info {
    id: number;
    name: string;
    type: string;
    available: boolean;


}




const page = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const Data: info[] = await response.json();
    console.log(Data);

    return (
        <div>
            <div className="mt-[100px] flex justify-center items-center font-[600] text-[24px] sm:text-[32px] p-[30px] ">
                <h1>&quot;Server Side Data Fetching&quot;</h1>
            </div>



            <div className="mt-[200px] ">
                <div className="w-full h-auto flex justify-center items-center">
                    <div className="w-[90%] h-auto flex flex-wrap  justify-center items-center gap-9 ">
                        {Data.map((item) => (
                            <div key={item.id} className="flex  flex-wrap justify-center items-center " >
                                <div className="w-[300px] sm:w-[350px] h-auto bg-slate-200  pb-6 rounded-md hover:bg-green-500 hover:text-white transition-all duration-500 delay-300">
                                    <div>
                                        <h1 className='text-[24px] font-[600] pl-2 pt-2'>{item.id} | {item.name}</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-[18px] font-[400] pl-11 pt-2'>Type:{item.type}</h1>
                                        
                                    </div>
                                    <div className=''>
                                        <h1 className=' text-[18px] pl-11 '>Avialable: {`${item.available}`}</h1>
                                    </div>

                                    <div className=" pl-4 pt-2 ">

                                        <button className="w-[150px] h-[40px] text-[16px] mt-4 border bg-blue-600 border-blue-600 rounded-[5px] hover:bg-black hover:text-white transition-all duration-500 delay-200  text-white">Connect</button>


                                    </div>





                                </div>




                            </div>

                        ))}


                    </div>

                </div>

            </div>










        </div>
    )
}

export default page