import './App.css'
import logo from './assets/logo-white.png'
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import AllBlogs from "./pages/all-blogs/AllBlogs.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import PostDetails from "./pages/post-details/PostDetails.jsx";

function App() {

    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/post-plaatsen" element={<NewPost/>} />
                <Route path="/blogoverzicht" element={<AllBlogs/>} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/posts/:id" element={<PostDetails />}/>
            </Routes>
        </div>
    )
}

export default App
