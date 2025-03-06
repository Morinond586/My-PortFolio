import data from "../../data/index.json";

import React from "react";
import { FaStar } from 'react-icons/fa6'


export default function Testimonials() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container">
        <p className="sub--title">Client Feedback</p>
        <h2 className="section--heading">Customer Feedback</h2>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <dev key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
              {Array.from({ length: 5 }, (reviews, index) => (
               <FaStar color="orange"/>
              ))}
            </div>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--authorèdetail">
                <img src={item.src} alt="Avatar" />
                <div>
                    <p className="text-md testimonial--author--name">{item.author_name}</p>
                    <p className="text-md testimonial--author--designation">{item.author_designation}</p>
                </div>
            </div>
          </dev>
        ))}
      </div>
    </section>
  );
}
