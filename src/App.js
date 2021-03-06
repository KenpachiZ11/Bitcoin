import React from 'react';
import { Routes, Route} from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Shop } from './pages/Shop';

import { Layout } from './components/Layout';

export default function App() {
    return (
        <>
        <Routes>
            <Route path="/" element = { <Layout /> }>
                <Route index element = { <Home /> } />
                <Route path = "about" element = { <About /> } />
                <Route path = "shop" element = { <Shop /> } />
            </Route>
        </Routes>
        </>
    );
}