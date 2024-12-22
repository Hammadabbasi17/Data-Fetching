import Link from 'next/link'


const Home = () => {
  return (
    <div className=''>
      <div className='w-full h-screen  flex justify-center items-center'>
        <div className='w-[900px]  sm:h-[350px] '>
          <h1 className='text-center text-[32px] font-[700] pt-3 '>Fetch Data via API  Using Client-side or Server-side!</h1>
          <p className='text-[20px] font-[500] text-center pt-10 '>Click the Button and view data using Client-side or Server-side API calls.</p>
          <div className="w-full h-[200px] mt-[40px] flex flex-col sm:flex-row justify-around items-center ">
            <Link href={"/clientside"}><button className="w-[220px] sm:w-[234px] h-[56px]  bg-black text-[14px] text-white  border-[1px] border-black rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500">Client-side Data Fetching</button></Link>
            <Link href={"/serverside"}><button className="w-[220px] sm:w-[234px] h-[56px]  bg-black text-[14px] text-white  border-[1px] border-black rounded-[5px] hover:bg-transparent hover:text-black transition-all duration-500">Server-side Data Fetching</button></Link>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Home
