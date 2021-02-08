import Container from "../../components/Container";
import React from "react";
import {SUPPORT} from "../../config/pages";

export default () => (
    <Container active={SUPPORT}>
        <h4 className="text-dark text-muted m-5">
            Support
        </h4>
    </Container>
);
