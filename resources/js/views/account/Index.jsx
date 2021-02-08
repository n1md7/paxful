import Container from "../../components/Container";
import React from "react";
import {YOUR_ACCOUNT} from "../../config/pages";

export default () => (
    <Container active={YOUR_ACCOUNT}>
        <h4 className="text-dark text-muted m-5">
            Your account
        </h4>
    </Container>
);
