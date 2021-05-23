import React from 'react';
import Header from './app/Header';
import Pages from './app/Pages';
import Footer from './app/Footer';

const App = () => {
    const page ='RESUME';

    return (
        <div class="main">       
            <Header page={page}/>
            <Pages page={page}/>
            <Footer />
        </div>
    )
};

export default App;