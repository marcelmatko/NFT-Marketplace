import exodus from '../assets/images/exodus.svg'
import metamask from '../assets/images/metamask.svg'
import safepal from '../assets/images/safepal.svg'
import trustwallet from '../assets/images/trustwallet.svg'
import walletconnect from '../assets/images/walletconnect.svg'


export default function Partners() {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div className='flex justify-center items-center space-x-28'>
        <div><img src={metamask} alt="metamask"/></div>
        <div><img src={walletconnect} alt="walletconnect"/></div>
        <div><img src={trustwallet} alt="trustwallet"/></div>
      </div>
      <div className='flex justify-center items-center space-x-28'>
        <div><img src={exodus} alt="xodus"/></div>
        <div><img src={safepal} alt="safepal"/></div>
      </div>
    </div>
  )
}