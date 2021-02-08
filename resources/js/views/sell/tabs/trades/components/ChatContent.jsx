import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export default ({trade}) => {

    if(!trade) return (
        <div className="user-chat-container flex-grow-1 d-flex flex-column">
            Loading...
        </div>
    );

    return (
        <div className="user-chat-container flex-grow-1 d-flex flex-column">
            <div className="chat-header flex-auto d-flex align-items-center">
                <div className="remove-box flex-auto ">
                    <FontAwesomeIcon icon={faTrash} size={'lg'}/>
                </div>
                <div className="header-info flex-grow-1 d-flex flex-column">
                    <div className="chat-title">{trade?.gift_card_name}</div>
                    <div className="user-feedback">
                        <div className="username d-inline">{trade?.user_name}</div>
                        <div className="feedback d-inline">
                            <span className="text-success">+{trade?.positive_reputation}</span> /
                            <span className="text-danger">-{trade?.negative_reputation}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal-line flex-auto">
                <hr/>
            </div>
            <div className="chat-content flex-grow-1 d-flex flex-column align-self-center">
                <div className="scroll-view d-flex h-100 w-100 flex-column">
                    <div className="chat-box flex-auto">
                        <div className="text-container flex-grow-1 d-flex flex-column">
                            <div className="text-carrier">
                                Nulla facilisi. Nullam scelerisque vulputate ex in mattis.
                            </div>
                            <div className="send-time">14:20 pm</div>
                        </div>
                        <div className="avatar-image flex-auto align-self-center">
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""/>
                        </div>
                    </div>
                    <div className="chat-box--client flex-auto">
                        <div className="text-container flex-grow-1 d-flex flex-column">
                            <div className="text-carrier">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia felis
                                hendrerit, egestas elit ut, ornare odio. Sed a gravida tortor. Quisque quis leo
                                ex.
                                Aenean felis est, faucibus eu lobortis at, rhoncus a metus. Sed magna nisi,
                                iaculis vel
                                eros ac, blandit porttitor nunc. Curabitur egestas mi eu urna mattis fermentum.
                                Maecenas
                                id nisl facilisis, feugiat lorem sollicitudin, tincidunt neque. Curabitur
                                consequat,
                                lorem eu pellentesque posuere, dui augue sagittis tellus, sed auctor sem purus
                                pellentesque dolor. Aenean non fermentum urna. Donec lobortis eros et odio
                                elementum, at
                                sagittis enim aliquam. Nam ac ligula ut sapien vestibulum fermentum nec quis
                                ante. Donec
                                ipsum est, luctus vel eros vel, laoreet commodo lectus. Pellentesque pretium a
                                ex id
                                mollis. Phasellus placerat ut erat eget facilisis.
                            </div>
                            <div className="send-time">14:20 pm</div>
                        </div>
                        <div className="avatar-image flex-auto align-self-center">
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""/>
                        </div>
                    </div>
                    <div className="chat-box flex-auto">
                        <div className="text-container flex-grow-1 d-flex flex-column">
                            <div className="text-carrier">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia felis
                            </div>
                            <div className="send-time">14:20 pm</div>
                        </div>
                        <div className="avatar-image flex-auto align-self-center">
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""/>
                        </div>
                    </div>
                    <div className="chat-box--client flex-auto">
                        <div className="text-container flex-grow-1 d-flex flex-column">
                            <div className="text-carrier">
                                ex id
                                mollis. Phasellus placerat ut erat eget facilisis.
                            </div>
                            <div className="send-time">14:20 pm</div>
                        </div>
                        <div className="avatar-image flex-auto align-self-center">
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""/>
                        </div>
                    </div>
                    <div className="chat-box flex-auto">
                        <div className="text-container flex-grow-1 d-flex flex-column">
                            <div className="text-carrier">
                                mollis. Phasellus placerat ut erat eget facilisis.
                                mollis. Phasellus placerat ut erat eget facilisis.
                            </div>
                            <div className="send-time">14:20 pm</div>
                        </div>
                        <div className="avatar-image flex-auto align-self-center">
                            <img src="https://www.w3schools.com/w3images/avatar2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-input flex-auto position-relative">
                <input className="form-control" placeholder="Type your message..."/>
                <button className="btn">SEND</button>
            </div>
        </div>
    );
};
