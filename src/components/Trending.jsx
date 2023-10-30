

export default function Trending(props) {
  return (
    <div class="card-bg m-3 max-w-sm rounded-lg border border-indigo-500/75
 shadow-md">
    <a href="#">
        <img class="rounded-t-lg p-5" src={props.item.img_nft} alt=""/>
    </a>
    <div className='px-5 py-2 flex'>
      <img className='rounded flex-none' src={props.item.img_collector}/>
      <div className='flex-auto ml-4 py-1'>
        <p className='font-bold text-white'>{props.item.collection_name}</p>
        <p className='mt-3 text-sm text-gray-200'>{props.item.collector_name}</p>
      </div>
      <img className='object-none' src={props.item.crypto_chain}/>
    </div>
    <div class="px-5 pb-5">
      <div className='text-white grid grid-cols-3'>
        <div className='flex-auto'><p className='font-bold text-lg'>{props.item.latest_bid}</p><p className='text-sm'>latest bid</p></div>
        <div><p className='font-bold text-lg text-center'>{props.item.from}</p><p className='text-sm text-center'>from</p></div>
        <div><p className='font-bold text-lg text-right'>{props.item.price}</p><p className='text-lime-500 text-sm text-right'>{props.item.change}</p></div>
      </div>
    </div>
</div>
  )
}