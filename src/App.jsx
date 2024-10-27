import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayOutOne from './LayOuts/LayOutOne'
import Home from './Pages/Home'

function App() {

    const route = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path="/" element={<LayOutOne />} >
                <Route index element={<Home />} />
            </Route>
        </Route>
    ))

    return (
        <>
            <RouterProvider router={route} />
        </>
    )
}

export default App
