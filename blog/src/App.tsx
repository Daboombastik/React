import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import EventListener from "./components/EventListener";

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Blog />
            </main>
            <Footer weight={'200'} height={'220'}>
                <EventListener button={'print input'} input={''}></EventListener>
            </Footer>
        </div>
    );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//
// // Components
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
// import Blog from "./components/Blog";
//
// function App() {
//   return (
//       <Router>
//         <Header />
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/blog" component={Blog} />
//       </Router>
//   );
// }
//
// export default App;
