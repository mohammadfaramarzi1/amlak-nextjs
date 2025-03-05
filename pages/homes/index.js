import Home from "@/components/modules/Home";
import db from "../../data/db.json";
import { useEffect, useState } from "react";

function Homes() {
  const [search, setSearch] = useState("");
  const [filtering, setFiltering] = useState("-1");
  const [allHomes, setAllHomes] = useState([...db.homes]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;
  const firstIndex = (page - 1) * itemsPerPage;
  const lastIndex = page * itemsPerPage;

  useEffect(() => {
    const filteredHomes = db.homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setAllHomes(filteredHomes);
  }, [search]);

  useEffect(() => {
    switch (filtering) {
      case "price": {
        const newHomes = [...allHomes].sort((a, b) => a.price - b.price);
        setAllHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...allHomes].sort(
          (a, b) => a.roomCount - b.roomCount
        );
        setAllHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...allHomes].sort((a, b) => a.meterage - b.meterage);
        setAllHomes(newHomes);
        break;
      }
      default: {
        setAllHomes([...db.homes]);
        break;
      }
    }
  }, [filtering]);

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select
            name=""
            id=""
            defaultValue={filtering}
            onChange={(event) => setFiltering(event.target.value)}
          >
            <option value="-1">انتخاب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
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
          allHomes
            .slice(firstIndex, lastIndex)
            .map((home) => <Home key={home.id} {...home} />)
        ) : (
          <p className="empty">املاکی با این نام وجود ندارد...</p>
        )}
      </div>
      {!!allHomes.length && (
        <ul className="pagination__list">
          {Array.from(
            { length: Math.ceil(allHomes.length / itemsPerPage) },
            (_, index) => (
              <li
                key={index + 1}
                className={`pagination__item ${page === index + 1 && "active"}`}
                onClick={() => setPage(index + 1)}
              >
                <span className="">{index + 1}</span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default Homes;
