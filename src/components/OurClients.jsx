import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./OurClients.css";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";

const testimonials = [
  {
    img: testimonial2,
    quote:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    name: "Client Name",
    profession: "Software Developer at Bluecode",
  },
  {
    img: testimonial1,
    quote:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    profession: "UI/UX Designer",
    name: "Client Name",
  },
  {
    img: testimonial3,
    quote:"Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos",
    profession: "Project Manager",
    name: "Client Name",
  },
];

const Testimonial = () => {
  return (
    <div className="container mt-5" id="TESTIMONIALS">
      <h1 className="text-center school-h4"><b>Our Clients Say!</b></h1>
      <p className="text-center Facilities-p">
      Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd <br />vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card text-center card p-3 mt-5">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="rounded-circle mx-auto d-block mb-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="client font-weight-bold text-center">
                <h4 className="school-h4">
                  <b>{testimonial.name}</b>
                </h4>
              </div>
              <div className="profession text-center">
                {/* <b>{testimonial.profession}</b> */}
              </div>
              <p>{testimonial.quote}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
