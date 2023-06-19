import React from "react"
import {HashRouter} from "react-router-dom"
import {Layout} from "./layout/Layout"
import Pages from "./Pages"

function HW5() {
    return (
        <HashRouter>
            <Layout>
                <Pages/>
            </Layout>
        </HashRouter>
    )
}

export default HW5
