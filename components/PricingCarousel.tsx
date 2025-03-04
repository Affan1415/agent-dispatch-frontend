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
            <div className="bg-gray-900 p-8 rounded-lg flex flex-col md:flex-row items-center justify-center w-full gap-8">
              <img
                src={plan.image}
                alt={plan.name}
                className="w-56 h-56 object-cover flex-shrink-0 rounded-lg max-w-xs"
              />
              <div className="text-center md:text-left flex-1 px-6">
                <h2 className="text-3xl font-bold">{plan.name}</h2>
                <p className="text-lg mt-2 max-w-md mx-auto md:mx-0">
                  {plan.description}
                </p>
              </div>
              <p className="text-2xl font-bold text-right md:text-left">
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
