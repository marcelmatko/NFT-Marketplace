export default function Collections(props) {
  return(
    <div class="collection-card m-3 max-w-[324px] rounded-lg border border-indigo-500/75
 shadow-md">
    <a href="#">
        <img class="rounded-t-lg p-5" src={props.item.nft_img} alt=""/>
    </a>
    <div className='px-5 py-2 flex'>
      <div className=''>
        <p className='font-bold text-white'>{props.item.nft_name}</p>
        <p className='mt-1 text-sm text-gray-200'>{props.item.nft_collector}</p>
      </div>
    </div>
    <div class="px-5 pb-5 ">
      <div className='text-white grid grid-cols-2'>
        <div className='flex-auto'><p className='font-bold text-lg'>{props.item.floor_price}</p><p className='text-sm'>latest bid</p></div>
        <div><p className='font-bold text-lg text-right'>{props.item.price}</p><p className='text-lime-500 text-sm text-right'>{props.item.change}</p></div>
      </div>
    </div>
</div>
  )
}