import Container from "../../components/Container";
import React from "react";
import {BUY_BITCOINS} from "../../config/pages";

export default () => (
    <Container active={BUY_BITCOINS}>
        <h4 className="text-dark text-muted m-5">
            Buy Bitcoins
        </h4>
    </Container>
);
