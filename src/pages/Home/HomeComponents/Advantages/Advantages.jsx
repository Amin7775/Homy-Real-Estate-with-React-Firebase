import img1 from './../../../../assets/img/Advantages/advantages_1.svg'
import img2 from './../../../../assets/img/Advantages/advantages_2.svg'
import img3 from './../../../../assets/img/Advantages/advantages_3.svg'

const Advantages = () => {
    return (
        <div className='py-14 container mx-auto'>
          <h1 className='text-6xl text-center'>Unlock Homy's advantages</h1>  
          <p className='mt-5 text-2xl font-light text-center text-slate-500'>Your trusted real estate partner in every transaction</p>
          <div className='mt-14 flex flex-col lg:flex-row gap-7 lg:gap-5'>
            {/* 1 */}
            <div className='w-full lg:w-1/3 flex flex-col items-center justify-center gap-3'>
                <img src={img2} alt="" />
                <h2 className='text-slate-400 text-xl'>BUY A HOME</h2>
                <h1 className='w-[90%] lg:w-[80%] mx-auto text-center text-2xl font-light'>Explore homy's 2 million+ homes and uncover your ideal living space.</h1>
            </div>
            {/* 2 */}
            <div className='w-full lg:w-1/3 flex flex-col items-center justify-center gap-3'>
                <img src={img3} alt="" />
                <h2 className='text-slate-400 text-xl'>RENT A HOME</h2>
                <h1 className='w-[90%] lg:w-[80%] mx-auto text-center text-2xl font-light'>Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.</h1>
            </div>
            {/* 3 */}
            <div className='w-full lg:w-1/3 flex flex-col items-center justify-center gap-3'>
                <img src={img1} alt="" />
                <h2 className='text-slate-400 text-xl'>SELL PROPERTY</h2>
                <h1 className='w-[90%] lg:w-[80%] mx-auto text-center text-2xl font-light'>List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.</h1>
            </div>
            
            
          </div>
        </div>
    );
};

export default Advantages;