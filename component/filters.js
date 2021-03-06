import { useState, useEffect } from "react";

export default function Filters({ router }) {
  const yearsFilters = [];
  for (let i = 2006; i <= 2020; i++) {
    yearsFilters.push(i);
  }

  const [filters, setFilters] = useState({
    launch_year: router.query.launch_year || "",
    launch_success: router.query.launch_success || "",
    land_success: router.query.land_success || "",
  });

  function handleClear() {
    setFilters((items) => ({
      launch_year: "",
      launch_success: "",
      land_success: "",
    }));
  }

  function handleClick(key, val) {
    setFilters((items) => {
      const fill = !!val == false || !!val == true ? val : "";

      return {
        ...items,
        [key]: fill,
      };
    });
  }

  useEffect(() => {
    const filtered = {};
    Object.keys(filters).filter((item) =>
      filters[item] !== ""
        ? (filtered[item] = filters[item])
        : delete filtered[item]
    );
    router.push({ query: filtered });
  }, [filters]);

  return (
    <div className="filters">
      <div className="filters-container card">
        <div className="filters-section ">
          <button
            className="filters-button filters-clear"
            onClick={() => handleClear()}
          >
            Clear Filters
          </button>
          <h2>Year</h2>
          {yearsFilters.map((item) => (
            <button
              key={item}
              className={`filters-button ${
                filters.launch_year == item && filters.launch_year !== ""
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleClick("launch_year", item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="filters-section">
          <h2>Successful Launch</h2>
          <button
            className={`filters-button ${
              filters.launch_success == true ? "selected" : ""
            }`}
            onClick={() => handleClick("launch_success", true)}
          >
            True
          </button>
          <button
            className={`filters-button ${
              filters.launch_success === ""
                ? ""
                : filters.launch_success === false
                ? "selected"
                : ""
            }`}
            onClick={() => handleClick("launch_success", false)}
          >
            False
          </button>
        </div>
        <div className="filters-section">
          <h2>Successful Landing</h2>
          <button
            className={`filters-button ${
              filters.land_success == true ? "selected" : ""
            }`}
            onClick={() => handleClick("land_success", true)}
          >
            True
          </button>
          <button
            className={`filters-button ${
              filters.land_success === ""
                ? ""
                : filters.land_success === false
                ? "selected"
                : ""
            }`}
            onClick={() => handleClick("land_success", false)}
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
}
