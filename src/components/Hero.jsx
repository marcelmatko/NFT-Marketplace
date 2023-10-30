import heroimage from '../assets/images/hero.svg'

export default function Header() {
  return (
    <section className='flex md:flex-row flex-col'>
      <div className="ml-44 mt-60">
        <h1 className="clash-display capitalize mb-4 text-3xl max-w-[7em] font-medium text-white md:text-5xl lg:text-6xl"> Discover, collect, & sell <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]">Extraordinary</span> NFTs</h1>
      <p className="font-light text-white max-w-3xl capitalize">the leading NFT Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.</p>
        <div className='mt-16'>
          <button type="button" className="py-4 px-14 text-white bg-blue-700 font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-2xl text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore</button>

          <button type="button" className="ml-6 py-4 px-14 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-2xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">Create</button>
        </div>

        <div className='mt-16 max-w-md'>
            <dl class="grid grid-cols-3 gap-3 mx-auto max-w-screen-xl text-white sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-1 dark:text-white">
                <div class="flex flex-col justify-center items-center">
                    <dt class="mb-2 text-3xl font-semibold">432K+</dt>
                    <dd class="font-light text-white dark:text-gray-400 text-sm">Collections</dd>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <dt class="mb-2 text-3xl font-semibold">200K+</dt>
                    <dd class="font-light text-white dark:text-gray-400 text-sm">Artists</dd>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <dt class="mb-2 text-3xl font-semibold">10K+</dt>
                    <dd class="font-light text-white dark:text-gray-400 text-sm">Community</dd>
                </div>
            </dl>
        </div>
      </div>
      
      <div>
        <img src={heroimage} className="w-[1036px] h-[942.02px] flex-wrap"/>
      </div>
    </section>

  )
}