import { faExpand, faHeart, faMapMarker, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Home({ img, id, meterage, price, roomCount, title }) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title}</h5>
      <span className="card__like">
        <FontAwesomeIcon icon={faHeart} />
      </span>
      <div className="card__details">
        <span className="card__icon">
          <FontAwesomeIcon icon={faMapMarker} />
        </span>
        <p className="card__text">مالدیو</p>

        <span className="card__icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <p className="card__text">{roomCount} اتاق</p>

        <svg className="card__icon">
          {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
        </svg>
        <p className="card__text">{meterage} متر مربع</p>

        <svg className="card__icon">
          <FontAwesomeIcon icon={faExpand} />
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
