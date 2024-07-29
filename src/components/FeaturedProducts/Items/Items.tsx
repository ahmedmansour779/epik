import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredProductData } from '../../../data/featuredProductData';
export default function Items() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='w-full'
    >
      {
        featuredProductData.map(({ title, description, image }, index) => {
          return (
            <SwiperSlide key={index} className='flex flex-col items-center gap-2'>
              <div
                style={{
                  boxShadow: "0px 0px 4px 1px #246EFD40"
                }}
                className='flex flex-col border=[0.25px] border-solid border-[#A4A4A4] rounded-lg p-6 items-center gap-4'>
                <img src={image} className='h-56 object-contain' />
                <p className='font-Urbanist text-lg text-gradient'>
                  {title}
                </p>
              </div>
              <p className='text-lg font-Urbanist text-[#777777]'>
                {description}
              </p>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}
