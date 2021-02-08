import React, {useEffect, useState} from "react";
import axios from "axios";
import ClientChatList from "./components/ClientChatList";
import ChatContent from "./components/ChatContent";
import ClientInfo from "./components/ClientInfo";

export default () => {

    const [trades, setTrades] = useState([]);
    const [activeTrade, setActiveTrade] = useState(-1);

    useEffect(() => {
        axios.get('/api/v1/trades')
            .then(({data}) => {
                setTrades(data);
                setActiveTrade(0);
            })
            .catch(({message}) => console.log(message));
    }, []);

    const activeTradeHandler = tradeIndex => () => setActiveTrade(tradeIndex);

    return (
        <div className="border flex-grow-1 d-flex flex-column">
            <div className="trade-container flex-grow-1 d-flex flex-row">
                <ClientChatList trades={trades} clickHandler={activeTradeHandler} activeTrade={activeTrade}/>
                <ChatContent trade={trades[activeTrade]}/>
                <ClientInfo trade={trades[activeTrade]}/>
            </div>
        </div>
    );
}
