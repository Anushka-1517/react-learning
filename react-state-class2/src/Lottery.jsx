import { useState } from "react";
import "./Lottery.css";
import { genTicket } from "./helper";
import Button from "./Button";

export default function Lottery({ n, winningSum, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    let isWinning = winCondition(ticket);

    return (
        <div>
            <h1>Lottery Game!</h1>

            <div className="ticket">
                {ticket.map((num, index) => (
                    <span key={index}>{num}</span>
                ))}
            </div>

            <Button action={buyTicket} />

            <h3>
                {isWinning && "Congratulations, you won!"}
            </h3>
        </div>
    );
}