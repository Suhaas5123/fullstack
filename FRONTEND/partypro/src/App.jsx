import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LazyLayout from './components/ui/LazyLayout';
import { lazy } from "react";
import Contactpage from "./pages/contact";


const LazyLogin=lazy(()=>import('./pages/auth/login'));
const LazyRegister=lazy(()=>import('./pages/auth/register'));
const LazyHomepage=lazy(()=>import('./pages/Homepage/homepage'));
const LazyProfile=lazy(()=>import('./pages/user/profile'));
const LazyDashboard=lazy(()=>import('./pages/admin/dashboard'));
const LazyBookEvents=lazy(()=>import('../src/pages/user/booking'));
const LazyAbout=lazy(()=>import('../src/pages/about'));
const LazyEvents=lazy(()=>import('../src/pages/user/events'));
const LazyViewEvents=lazy(()=>import('../src/pages/user/viewevents'));
const LazyCancelEvents=lazy(()=>import('../src/pages/user/cancelevent'));
const LazyVenues=lazy(()=>import('../src/pages/user/venues'));
function App() {
    
    return ( <>
        <Router>
            <Routes>
                <Route path="/" element={<LazyLayout component={LazyHomepage} timeout={1000}/>}/>
                <Route path="/login" element={<LazyLayout component={LazyLogin} timeout={1000}/>}/>
                <Route path="/register" element={<LazyLayout component={LazyRegister} timeout={1000}/>}/>
                <Route path="/homepage" element={<LazyLayout component={LazyHomepage} timeout={1000}/>}/>
                <Route path="/profile" element={<LazyLayout component={LazyProfile} timeout={1000}/>}/>
                <Route path="/dashboard" element={<LazyLayout component={LazyDashboard} timeout={1000}/>}/>
                <Route path="/booking" element={<LazyLayout component={LazyBookEvents} timeout={1000}/>}/>
                <Route path="/about" element={<LazyLayout component={LazyAbout} timeout={1000}/>}/>
                <Route path="/events" element={<LazyLayout component={LazyEvents} timeout={1000}/>}/>
                <Route path="/viewevents" element={<LazyLayout component={LazyViewEvents} timeout={1000}/>}/>
                <Route path="/cancelevent" element={<LazyLayout component={LazyCancelEvents} timeout={1000}/>}/>
                <Route path="/venues" element={<LazyLayout component={LazyVenues} timeout={1000}/>}/>
                <Route path="/contact" element={<Contactpage/>}/>
            </Routes>
        </Router>
    </> );
}

export default App;