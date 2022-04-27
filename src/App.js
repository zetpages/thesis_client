import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check, getUser} from "./http/userAPI";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import Preloader from "./components/Preloader";

const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        getUser().then(data => {
            user.getUs(data)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Preloader show={true} />
    }

    return (
        <BrowserRouter>
            <ScrollToTop />
            <HomePage />
        </BrowserRouter>
    );
});

export default App;