import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import Loading from "../../components/Loading";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/vehicles/")
      .then((res) => res.json())
      .then((res) => {
        setVehicles(res.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Транспорт</h1>
      <br />
      <div className="vehicles">
        {vehicles.map((item) => {
          return (
            <div
              className="vehicle"
              onClick={() =>
                navigate("/vehicle/", { state: { url: item.url } })
              }
            >
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VehiclesPage;
