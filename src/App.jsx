import wavedots from "./assets/images/wavedots.svg";
import categories from './categories';
import collections from './collections';
import Categories from './components/Categories';
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import Howto from "./components/Howto";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Trending from "./components/Trending";
import trending from './trending';
//       <div className='wavedots'><img src={wavedots}></img></div>
function App() {
  const trending_cards = trending.map(item => {
    return (
      <Trending key={item.id}
      item={item} />
    )
  })
  
  const collection_cards = collections.map(item => {
    return (
      <Collections key={item.id}
      item={item} />
    )
  })

  const categorie_cards = categories.map(item => {
    return (
      <Categories key={item.id}
      item={item} />
    )
  })
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Partners/>
      <section className="mt-[24.188rem]">
        <div className="flex justify-center">
          <span className="p-5 text-transparent font-bold text-5xl bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]">Trending NFTs</span>
        </div>
        <div className='flex mt-12 flex-wrap justify-center'>
          {trending_cards}
        </div>
        <div className="flex justify-center mt-10">
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">See more</button>
        </div>
      </section>
      <section className='mt-64'>
        <div className="flex justify-center mb-10">
          <span className="p-5 text-transparent font-bold text-5xl bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]">Top Collections</span>
        </div>
        <div className="flex justify-center mb-10">
        <button className="py-4 px-8 text-white bg-blue-700 font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-xl text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">All</button>
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">Collectibles</button>
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">Metaverse</button>
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">Virtual Worlds</button>
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">Sports</button>
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">Music</button>
        </div>
      <div className="flex flex-row flex-wrap justify-center">
      {collection_cards}
        </div>
        <div className="flex justify-center mt-10">
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">See more</button>
        </div>
    </section>
    <section className='mt-64'>
        <div className="flex justify-center mb-10">
          <span className="p-5 text-transparent font-bold text-5xl bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]">Top Categories</span>
        </div>
      <div className="flex flex-row flex-wrap justify-center">
        {categorie_cards}
        </div>
        <div className="flex justify-center mt-10">
        <button className="ml-6 py-4 px-8 text-white font-medium hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl text-center mr-2 mb-2 dark:border-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-white dark:focus:ring-white">See more</button>
        </div>
    </section>
    <section className="mt-64 mx-10.75rem">
      <Howto/>
    </section>
    </div>
  );
}

export default App;
