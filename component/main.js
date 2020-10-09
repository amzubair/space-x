function Main({ data, router }) {
  const { query } = router;
  if (!data) return <div>Loading...</div>;
  const yearsFilters = [];
  for (let i = 2006; i <= 2020; i++) {
    yearsFilters.push(i);
  }
  return (
    <div className="container">
      <div className="filters">
        <div className="filters-container card">
          <div className="filters-section ">
            <h2>Year</h2>
            {yearsFilters.map((item) => (
              <div
                key={item}
                className={`filters-button ${
                  (query.launch_year == item && "selected") || ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="filters-section">
            <h2>Successful Launch</h2>
            <div
              className={`filters-button ${
                query.launch_success == "true" && "selected"
              }`}
            >
              True
            </div>
            <div
              className={`filters-button ${
                query.launch_success == "false" && "selected"
              }`}
            >
              False
            </div>
          </div>
          <div className="filters-section">
            <h2>Successful Landing</h2>
            <div
              className={`filters-button ${
                query.land_success == "true" && "selected"
              }`}
            >
              True
            </div>
            <div
              className={`filters-button ${
                query.land_success == "false" && "selected"
              }`}
            >
              False
            </div>
          </div>
        </div>
      </div>
      <div className="missions">
        <div className="mission-container">
          {data.map((item) => (
            <div key={item.flight_number} className="card missions-detail">
              <div className="mission-img">
                <img
                  src={item.links.mission_patch_small}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mission-details">
                <h2>
                  {item.mission_name} #{item.flight_number}
                </h2>
                <div>
                  Mission IDs:{" "}
                  {!item.mission_id.length
                    ? "Not Available"
                    : item.mission_id.map((id) => <span key={id}>{id}</span>)}
                </div>
                <div>Launch Year: {item.launch_year}</div>
                <div>
                  Successful Launch: {item.launch_success ? "Yes" : "No"}
                </div>
                <div>
                  Successful Landing:
                  {item.rocket.first_stage.cores[0].land_success ? "Yes" : "No"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
