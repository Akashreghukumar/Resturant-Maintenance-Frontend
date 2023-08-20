import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate, Routes, BrowserRouter, Outlet } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import AddBooking from './Components/AddBooking/AddBooking';
import MiniDrawer from './HeaderandSideBar';
import OrderFood from './Components/OrderingFood/OrderFood';
import FooditemsGrid from './Components/OrderingFood/FoodItemsGrid/FooditemsGrid';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MiniDrawer />}>
        <Route
          index
          element={<Dashboard />}
        />
        <Route path="/addbooking" element={<AddBooking />} />
        <Route path="/foodordering" element={<OrderFood/>} />
      </Route>
    </Routes>  
    </BrowserRouter>
      </>
  );
}

export default App;