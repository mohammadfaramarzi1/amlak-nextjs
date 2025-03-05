import Link from "next/link";
import React from "react";

function Home({ img, id, meterage, price, roomCount, title }) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title}</h5>
      <svg className="card__like">
        {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
      </svg>
      <div className="card__details">
        <svg className="card__icon">
          {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
        </svg>
        <p className="card__text">مالدیو</p>

        <svg className="card__icon">
          {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
        </svg>
        <p className="card__text">{roomCount} اتاق</p>

        <svg className="card__icon">
          {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
        </svg>
        <p className="card__text">{meterage} متر مربع</p>

        <svg className="card__icon">
          {/* <use xlink:href="img/sprite.svg#icon-key"></use> */}
        </svg>
        <p className="card__text">{price.toLocaleString()} میلیون تومان</p>
      </div>

      <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
        مشاهده ملک
      </Link>
    </div>
  );
}

export default Home;
