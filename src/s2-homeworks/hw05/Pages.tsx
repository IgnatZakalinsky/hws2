import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    Error404: '*'
}

export const PATH1: {pathName: string, element: React.ReactElement}[] = [
    {
        pathName: '/',
        element: <></>
    },
    {
        pathName: '/pre-junior',
        element: <PreJunior/>
    },
    {
        pathName: '/junior',
        element: <Junior/>
    },
    {
        pathName: '/junior-plus',
        element: <JuniorPlus/>
    },
    {
        pathName: '/*',
        element: <Error404/>
    }
]

function Pages() {
    return (
        <div>
            <Routes>
                {
                    PATH1.map((item, index) => 
                        <Route path={item.pathName} element={item.element} key={index}/>
                    )
                }
            
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}
                {/* <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />} />


                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />} />
                <Route path={PATH.JUNIOR} element={<Junior />} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />} />
                <Route path={'/*'} element={<Error404 />} /> */}
            </Routes>
        </div>
    )
}

export default Pages
