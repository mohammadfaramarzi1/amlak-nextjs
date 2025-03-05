import Home from "@/components/modules/Home";
import db from "../../data/db.json";

function Homes() {
  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select name="" id="">
            <option value="" selected>
              انتخاب کنید
            </option>
            <option value="">بر اساس قیمت</option>
            <option value="">بر اساس تعداد اتاق</option>
            <option value="">بر اساس ادرس</option>
            <option value="">بر اساس اندازه</option>
          </select>
        </div>
        <div className="home-search">
          <input type="text" placeholder="جستجو کنید" />
        </div>
      </div>
      <div className="homes">
        {db.homes.map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>
      <ul className="pagination__list">
        <li className="pagination__item">
          <a href="#" className="">
            {" "}
          </a>
        </li>
        <li className="pagination__item">
          <a href="#" className="">
            2
          </a>
        </li>
        <li className="pagination__item active">
          <a href="#" className="">
            1
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Homes;
