import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LazyLayout from './components/ui/LazyLayout';
import { lazy } from "react";


const LazyLogin=lazy(()=>import('./pages/auth/login'));
const LazyRegister=lazy(()=>import('./pages/auth/register'));
const LazyHomepage=lazy(()=>import('./pages/Homepage/homepage'));
const LazyProfile=lazy(()=>import('./pages/user/profile'));
const LazyDashboard=lazy(()=>import('./pages/admin/dashboard'));
const LazyBookEvents=lazy(()=>import('../src/pages/user/booking'));
const LazyAbout=lazy(()=>import('../src/pages/about'));
const LazyEvents=lazy(()=>import('../src/pages/user/events'));
const LazyViewEvents=lazy(()=>import('../src/pages/user/viewevents'));
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
            </Routes>
        </Router>
    </> );
}

export default App;