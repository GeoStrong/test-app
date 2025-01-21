"use client";

import React from "react";
import Image from "next/image";
import { useWindowSize } from "react-use";
import MainCard from "./main-card";
import cardImageOne from "@/public/assets/card-img-1.png";
import cardImageTwo from "@/public/assets/card-img-2.png";
import cardImageThree from "@/public/assets/card-img-3.png";
import cardImageFour from "@/public/assets/card-img-4.png";
import MainTrendingCarousel from "./main-body-carousel";
import { CardOptionsType } from "./main";

const MainBody: React.FC = () => {
  const { width } = useWindowSize();

  const isSm = width < 768;

  const cardOptions: CardOptionsType[] = [
    {
      price: 2.74,
      marketCap: "1.7B",
      isProfit: true,
      name: "Virtual",
      number: 0.59,
      image: cardImageOne.src,
    },
    {
      price: 0.0873,
      marketCap: "962K",
      isProfit: false,
      verified: true,
      name: "al16z",
      number: 11.59,
      image: cardImageTwo.src,
    },
    {
      price: 0.1232,
      marketCap: "701M",
      verified: true,
      name: "ticker3",
      image: cardImageThree.src,
    },
    {
      price: 25.51,
      marketCap: "988",
      name: "ticker4",
      image: cardImageFour.src,
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-dark text-[32px] font-bold">
        {isSm ? "Trending" : "Hottest"}
      </h2>
      <>
        {isSm ? (
          <MainTrendingCarousel options={cardOptions} />
        ) : (
          <div className="mt-3 grid grid-cols-2 gap-[14px] md:w-full lg:grid-cols-4">
            {cardOptions.map((card, index) => (
              <MainCard
                key={index}
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
            ))}
          </div>
        )}
      </>
    </div>
  );
};
export default MainBody;
