import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Root } from "./component/master/root"

export const Router = () => {
    return (
        <BrowserRouter>
            <Root>

                <Routes>
                    <Route element={<>zxc</>} path="/" />
                </Routes>
            </Root>
        </BrowserRouter>
    )
}
