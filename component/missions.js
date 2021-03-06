export default function Missions({ data }) {
  return (
    <div className="missions">
      <div className="mission-container">
        {data.map((item) => (
          <div key={item.flight_number} className="card missions-detail">
            <div className="mission-img">
              <img
                src={item.links.mission_patch_small}
                alt={`Mission patch image for ${item.mission_name}`}
              />
            </div>
            <div className="mission-details">
              <h3>
                {item.mission_name} #{item.flight_number}
              </h3>
              <div>
                Mission IDs:{" "}
                {!item.mission_id.length
                  ? "Not Available"
                  : item.mission_id.map((id) => (
                      <span key={id}>{id} </span>
                    ))}{" "}
              </div>
              <div>
                Launch Year: <span>{item.launch_year}</span>
              </div>
              <div>
                Successful Launch:{" "}
                <span>{item.launch_success ? "Yes" : "No"}</span>
              </div>
              <div>
                Successful Landing:
                <span>
                  {item.rocket.first_stage.cores[0].land_success ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
