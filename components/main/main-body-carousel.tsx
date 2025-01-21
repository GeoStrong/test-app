import React from "react";
import MainCard from "./main-card";
import Image from "next/image";
import { CardOptionsType } from "./main";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const MainBodyCarousel: React.FC<{ options: CardOptionsType[] }> = ({
  options,
}) => {
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
        {options.map((card, index) => (
          <SwiperSlide key={index}>
            <MainCard
              price={card.price}
              number={card.number}
              verified={card.verified}
              isProfit={card.isProfit}
              marketCap={card.marketCap}
              name={card.name}
            >
              <div className="h-48 w-full">
                <Image
                  className="h-full w-full rounded-t-xl"
                  src={card.image}
                  width={100}
                  height={100}
                  alt="card image"
                />
              </div>
            </MainCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default MainBodyCarousel;
