import React from "react";
import Container from "../../components/Container";
import pages, {SELL_BITCOINS} from "../../config/pages";
import Tabs from "./components/Tabs";
import TabBody from "./components/Body";
import Trade from "./tabs/trades";

export default () => {
    const activePage = pages.find(({key}) => key === SELL_BITCOINS);

    return (
        <Container active={SELL_BITCOINS}>
            <Tabs list={activePage.tabs || []}/>
            <TabBody>
                <Trade/>
            </TabBody>
        </Container>
    );
};
