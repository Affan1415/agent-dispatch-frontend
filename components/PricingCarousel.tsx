"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Plan {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface PricingCarouselProps {
  plans: Plan[];
}

const PricingCarousel: React.FC<PricingCarouselProps> = ({ plans }) => {
  return (
    <section className="flex justify-center items-center p-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-[85%]"
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 p-8 rounded-lg flex items-center justify-between w-full">
              <img src={plan.image} alt={plan.name} className="w-44 h-44" />
              <div className="text-center flex-1 px-8">
                <h2 className="text-3xl font-bold">{plan.name}</h2>
                <p className="text-lg mt-2 max-w-md mx-auto">
                  {plan.description}
                </p>
              </div>
              <p className="text-2xl font-bold pr-6">
                ${plan.price}
                <span className="text-sm">/month</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PricingCarousel;
