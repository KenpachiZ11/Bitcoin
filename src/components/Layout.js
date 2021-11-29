import { Link, Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <header>
                <Link to = "/">Главная</Link>
                <Link to = "/shop">Магазин</Link>
                <Link to = "/about">Прочее</Link>
            </header>
            
            <main>
                <Outlet/>
            </main>

            <footer className = 'container'>2021</footer>
        </>
    )
}

export {Layout}
