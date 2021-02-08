import React from "react";

export default ({trade}) => {

    if (!trade) {
        return (
            <div className="user-info-container flex-grow-1">
                Loading...
            </div>
        );
    }

    const minutes = new Date(trade.created_at).getMinutes();
    const USD = Math.ceil(trade.amount * trade.rate).toFixed(2);


    return (
        <div className="user-info-container flex-grow-1 pt-3">
            <div className="row text-center mb-2">
                <div className="col-12">
                    You are trading with <b>{trade.user_name}</b>
                </div>
                <div className="col-12 text-muted">
                    Started {minutes} minutes ago
                </div>
                <div className="col-12 my-3">
                    <button className="btn btn-success release-bitcoins">
                        Release bitcoins
                    </button>
                </div>
            </div>
            <div className="row info-table">
                <div className="col-6 pr-0">
                    <div className="feedback-cell d-flex flex-column ml-3 py-3">
                        <div className="avatar-image d-flex justify-content-center">
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar2.png"/>
                        </div>
                        <div className="feedback text-center">
                            <span className="text-success">+{trade.positive_reputation}</span> /
                            <span className="text-danger">-{trade.negative_reputation}</span>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-0">
                    <div className="trades-cell d-flex flex-column mr-3 py-3">
                        <div className="trades-text text-center">
                            # OF TRADES
                        </div>
                        <div className="trades-counter text-center">
                            7
                        </div>
                    </div>
                </div>
                <div className="col-6 pr-0">
                    <div className="trade-status-cell d-flex flex-column ml-3 py-3">
                        <div className="trade-status-text text-center">
                            TRADE STATUS
                        </div>
                        <div className={`trade-status text-center ${!!trade.status ? "paid" : ""}`}>
                            {!!trade.status ? "PAID" : "NOT PAID"}
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-0">
                    <div className="trade-hash-cell d-flex flex-column mr-3 py-3">
                        <div className="trade-hash-text text-center">
                            TRADE HASH
                        </div>
                        <div className="trade-hash text-center">
                            45aFD3Rr
                        </div>
                    </div>
                </div>
                <div className="col-6 pr-0">
                    <div className="amount-usd-cell d-flex flex-column ml-3 py-3">
                        <div className="amount-usd-text text-center">
                            AMOUNT USD
                        </div>
                        <div className="amount-usd text-center">
                            {USD}
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-0">
                    <div className="amount-btc-cell d-flex flex-column mr-3 py-3">
                        <div className="amount-btc-text text-center">
                            AMOUNT BTC
                        </div>
                        <div className="amount-btc text-center">
                            {trade.amount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
