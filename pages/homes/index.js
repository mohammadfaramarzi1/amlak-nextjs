import Home from "@/components/modules/Home";
import db from "../../data/db.json";
import { useEffect, useState } from "react";

function Homes() {
  const [search, setSearch] = useState("");
  const [allHomes, setAllHomes] = useState(db.homes);
  console.log(allHomes);

  useEffect(() => {
    const filteredHomes = db.homes.filter((home) =>
      home.title.toLowerCase().includes(search)
    );
    setAllHomes(filteredHomes);
  }, [search]);

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
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      <div className="homes">
        {allHomes.length ? (
          allHomes.map((home) => <Home key={home.id} {...home} />)
        ) : (
          <p className="empty">املاکی با این نام وجود ندارد...</p>
        )}
      </div>
      {!!allHomes.length && (
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
      )}
    </div>
  );
}

export default Homes;
