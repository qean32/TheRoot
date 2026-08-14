import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Root } from "./component/master/root"
import { Test } from "./page"

export const Router = () => {
    return (
        <BrowserRouter>
            <Root>

                <Routes>
                    <Route element={<Test />} path="/" />
                </Routes>
            </Root>
        </BrowserRouter>
    )
}
