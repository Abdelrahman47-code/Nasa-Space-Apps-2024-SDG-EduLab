// import "https://kit.fontawesome.com/a2db0f7c4b.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Researches from './pages/Researches';
import DataSources from './pages/DataSources';
import ContactUs from './pages/ContactUs';
import EventsNews from './pages/EventsNews';
import ArticlesBlogs from './pages/ArticlesBlogs';
import CompetitionsPage from './pages/CompetitionsPage';
import Error from "./pages/Error";
import SdgDetails from "./components/SdgDetails";
import Solutions from "./components/Solutions";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/sdg/:id" element={<SdgDetails />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="community" element={<Community />} />
          <Route path="competitionspage" element={<CompetitionsPage />} />
          <Route path="eventsnews" element={<EventsNews />} />
          <Route path="articlesblogs" element={<ArticlesBlogs />} />
          <Route path="contact" element={<ContactUs />} />

          <Route path="login" element={<Login />} />
          <Route path="researches" element={<Researches />} />
          <Route path="data-sources" element={<DataSources />} />
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
