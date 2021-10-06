import React, { useEffect } from "react";
import Error from "./Error";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchCovidDataAsync } from "../redux/CovidSlice/CovidSlice";
import Loading from './Loading'
const Content = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.covid.globaldata);
  const status = useSelector((state) => state.covid.status);
  const error = useSelector((state) => state.covid.error);

  let cards = [
    {
      id: 1,
      name: "Infected",
      count: data[0],
      lastUpdate: data[3],
      color: "red",
      desc: "Number of Active cases Covid 19",
    },
    {
      id: 2,
      name: "Recovered",
      count: data[1],
      lastUpdate: data[3],
      color: "blue",
      desc: "Number of Recovere cases Covid 19",
    },
    {
      id: 3,
      name: "Deaths",
      count: data[2],
      lastUpdate: data[3],
      color: "red",
      desc: "Number of Deaths Covid 19",
    },
    {
      id: 4,
      name: "Active",
      count: data[0] - data[2],
      lastUpdate: data[3],
      color: "blue",
      desc: "Number of Active cases Covid 19",
    },
  ];

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCovidDataAsync("All"));
    }
  }, [dispatch, status]);

  if (status === "error") {
    return <Error error={error} />;
  }
  if(status === "loading" || status === "idle"){
    return <Loading/>
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div className="card-container">
        {data.length > 0 &&
          cards.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </div>
  );
};

export default Content;
