import React from 'react';
import Header from './app/Header';
import Pages from './app/Pages';
import Footer from './app/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'HOME',
        };
    }

    render() {
        const {page} = this.state;

        return (
            <div class="main">       
                <Header page={page}/>
                <Pages page={page}/>
                <Footer />
            </div>
        );
    }
};

export default App;