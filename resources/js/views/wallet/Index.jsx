import Container from "../../components/Container";
import React from "react";
import {WALLET} from "../../config/pages";

export default () => (
    <Container active={WALLET}>
        <h4 className="text-dark text-muted m-5">
            Wallet
        </h4>
    </Container>
);
