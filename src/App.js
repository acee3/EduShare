import React from 'react';
import Header from './components/Header';
import ProblemStatement from './components/ProblemStatement';
import Solution from './components/Solution';
import Team from './components/Team';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Header />
      <ProblemStatement />
      <Solution />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
