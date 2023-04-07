import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Whitepaper from "./pages/Whitepaper";
export default function App() {
  return (

      <div>
      

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          {/* 👇️ handle dynamic path */}
          <Route path="/users/:userId" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div className="underDev">
                <h1 class="metal">
    UNDER DEVELOPMENT
    <span class="texture"></span>   
  </h1>
              </div>
            }
          />
        </Routes>
      </div>
    
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  const params = useParams();

  return <h2>Users: {params.userId}</h2>;
}



