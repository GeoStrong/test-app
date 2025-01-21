import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import cardBg from "@/public/assets/card-bg.png";
import "swiper/css";

const MainFooterCarousel: React.FC<{ options: string[] }> = ({ options }) => {
  const pagination = {
    clickable: true,
    renderBullet: () => {
      return "<span class='swiper-pagination-bullet'></span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        slidesPerView={1.3}
        spaceBetween={14}
        className="mt-3 flex gap-[14px]"
      >
        {options.map((title, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              style={{
                backgroundImage: `url(${cardBg.src})`,
              }}
              className="text-dark flex w-full items-center justify-center rounded-xl bg-cover bg-no-repeat py-8 text-[16px] shadow md:w-[280px]"
            >
              <p className="text-xl font-bold text-white">{title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default MainFooterCarousel;
