import LandingHeader from "./header";
import LandingFooter from "./footer";
import React from "react";
import EmbassyList from "./list_embassies";

const ListPage = () => {

    return (<div className={"wrap landing"}>
        <LandingHeader/>
            <div className={"embassy-list"}>
                <EmbassyList />
            </div>
        <LandingFooter/>
    </div>)
};

export default ListPage