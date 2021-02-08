import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

export default ({trades, clickHandler, activeTrade}) => {

    return (
        <div className="chat-list-container flex-grow-1 d-flex flex-column">
            {
                trades.map((trade, index) => {
                    const status = !!trade.status ?
                        <FontAwesomeIcon icon={faCircle} color={'green'} size={'xs'}/> :
                        <FontAwesomeIcon icon={faCircle} color={'silver'} size={'xs'}/>;
                    const active = activeTrade === index ? 'active' : '';
                    const USD = Math.round(trade.amount * trade.rate);

                    return (
                        <div key={trade.id} onClick={clickHandler(index)}
                             className={"user-chat-box d-flex flex-row " + active}>
                            <div className="status">{status}</div>
                            <div className="box-content d-flex flex-column">
                                <div className="user-info">{trade.user_name} is buying</div>
                                <div className="gift-card-name">{trade.gift_card_name}</div>
                                <div className="trade-info">{USD} USD ({trade.amount} BTC)</div>
                            </div>
                            <div className="avatar d-flex flex-column">
                                <div className="avatar-image d-flex justify-content-center">
                                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar2.png"/>
                                </div>
                                <div className={"status-text " + (!!trade.status ? "paid" : '')}>
                                    {!!trade.status ? "PAID" : 'NOT PAID'}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};
