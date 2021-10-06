import React from "react";
import { FaVirus } from "react-icons/fa";
import { GiHealing, GiDeathSkull } from "react-icons/gi";
import { MdSick } from "react-icons/md";
import AnimatedNumber from "react-animated-number";

const Card = ({ card }) => {
  const generaldate = new Date(card.lastUpdate);
  const date = generaldate.toLocaleDateString();
  const time = generaldate.toLocaleTimeString();
  return (
    <div className="card">
      <div className="card-name">{card.name}</div>
      <div className="icon-area">
        {
          {
            Infected: <FaVirus className="icon" />,
            Recovered: <GiHealing className="icon" />,
            Deaths: <GiDeathSkull className="icon" />,
            Active: <MdSick className="icon" />,
          }[card.name]
        }
      </div>
      <AnimatedNumber
        value={card.count}
        className="card-count"
        duration={1000}
        frameStyle={(percentage) =>
          percentage > 20 && percentage < 80 ? { opacity: 0.3 } : {}
        }
        formatValue={(n) => n.toFixed(0)}
      />
      <div className="card-footer">
        <div className="card-footer-desc">{card.desc}</div>
        <div className="card-footer-lastUpdate">
          <div>{time}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
