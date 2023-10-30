export default function Categories(props){
  return(
    <div class="collection-card m-3 max-w-[27.836rem] max-h-[24.125rem] rounded-lg border border-indigo-500/75
    shadow-md">
      <div class="grid grid-rows-2 grid-flow-col gap-1 pt-5 px-5">
          <div class="">
            <a href="#">
            <img class="rounded-t-lg" src={props.item.img_1} alt=""/>
            </a>
        </div>
          <div class="">
            <a href="#">
            <img class="rounded-t-lg" src={props.item.img_2} alt=""/>
            </a>
          </div>
          <div class="row-span-2">
              <a href="#">
                <img class="rounded-t-lg" src={props.item.img_3} alt=""/>
              </a>
          </div>
      </div>
   <div className='text-center p-5 text-[1.375rem]'>
           <p className='font-bold text-white'>{props.item.name}</p>
       </div>
   </div>
  )
}