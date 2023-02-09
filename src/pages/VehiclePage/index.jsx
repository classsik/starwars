import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Loading from "../../components/Loading";

const VehiclePage = () => {
  const [vehicle, setVehicle] = useState(null);
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(state.url)
      .then((res) => res.json())
      .then((res) => {
        setVehicle(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (vehicle === null || loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>Модель: {vehicle.model}</p>
      <p>Производитель: {vehicle.manufacturer}</p>
      <p>Цена в кредитах: {vehicle.cost_in_credits}</p>
      <p>Длина: {vehicle.length}</p>
      <p>Макс. скорость: {vehicle.max_atmosphering_speed}</p>
      <p>Экипаж: {vehicle.crew}</p>
      <p>Пассажиры: {vehicle.passengers}</p>
    </div>
  );
};

export default VehiclePage;
