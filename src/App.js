import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import Login from "./pages/adminLogin/Login";
import { Register } from "./pages/adminLogin/Register";
import { Header } from "./Container/Header/Header";
import { Box, Container } from "@mui/material";

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/reservationPage" element={<ReservationPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
            </Routes>
            <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                        )
                        .join("\n")}
                </Box>
            </Container>
        </BrowserRouter>
    );
};
