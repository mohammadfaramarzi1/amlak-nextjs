import { useRouter } from "next/router";
import db from "../../data/db.json";

function SingleHome() {
  const router = useRouter();
  const mainHome = db.homes.find((home) => home.id === +router.query.id);

  return (
    <div className="home-details">
      <div className="home-details-top">
        <div className="home-img">
          <img src={mainHome?.img} alt="" />
        </div>
        <div className="home-interduce">
          <div className="home-title">
            <h1>
              <span>{mainHome?.title}</span>
              <span>{mainHome?.price.toLocaleString()} تومان</span>
            </h1>
            <div className="tags">
              <span className="tag green-tag">ویژه</span>
              <span className="tag brown-tag">برای اجاره</span>
            </div>
            <div className="adrress">آدرس : شیراز، میدان ارم</div>
          </div>
          <div className="home-review">
            <div className="home-review-top">
              <h2>مرور کلی</h2>
              <p className="">
                <span>کد ملک : </span>
                <span>{mainHome?.code}</span>
              </p>
            </div>
            <ul className="home-review-bottom">
              <li>
                <span>نوع ملک: </span>
                <span>{mainHome?.title}</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span>{mainHome?.roomCount}</span>
              </li>
              <li>
                <span>متراژ</span>
                <span>{mainHome?.meterage}</span>
              </li>
              <li>
                <span>سال ساخت</span>
                <span>1402</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-details-bottom">
        <div className="home-details-description">
          <p className="">توضیحات</p>
          <p className="">{mainHome?.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleHome;
