import React from 'react'
import {BrowserRouter,HashRouter,Routes,Route} from 'react-router-dom'
import App from 'pages/App'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/login' element={<Login/>}/>
            <Route component={NotFound}/>
        </Routes>
    </BrowserRouter>
)


export default Router;