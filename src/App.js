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

        this.handlePageChang = this.handlePageChang.bind(this);
    }

    handlePageChang(newPage) {
        this.setState({
            page: newPage,
        });
    }

    render() {
        const { page } = this.state;

        return (
            <div class="main">
                <Header 
                    onPageChange={this.handlePageChang}
                    page={page}
                />
                <Pages page={page}/>
                <Footer />
            </div>
        );
    }
};

export default App;