import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export class PauseOnHover extends Component {
  render() {
    const pic = [
      {
        url: "https://api2.zoomit.ir/media/2021-1-apple-homepod-mini-on-his-hands-638c65b0b37c6251fa712a42?w=1920&q=75",
        title: "test title for testing ",
      },
      {
        url: "https://api2.zoomit.ir/media/2021-6-microsoft-could-kill-off-windows-10-in-2025-638bb4e0e60c0026b82512c0?w=1920&q=75",
        title: "test title 2 for testing ",
      },
      {
        url: "https://api2.zoomit.ir/media/2021-11-surface-laptop-se-1-638bb608da37f663eb45630d?w=1920&q=75",
      },
      {
        url: "https://api2.zoomit.ir/media/2022-1-nft-based-games-638bb6a6b90c494dc77f78a2?w=1920&q=75",
      },
      {
        url: "https://api2.zoomit.ir/media/2022-1-nft-based-games-638bb6a6b90c494dc77f78a2?w=1920&q=75",
      },
    ];

    let settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      atoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} className="h-full">
          {pic.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.url} alt="pic" className="px-2 rounded-2xl"></img>;
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default PauseOnHover;
