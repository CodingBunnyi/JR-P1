import React from 'react';
import styled from 'styled-components';
import Header from './app/Header';
import Pages from './app/Pages';
import Footer from './app/Footer';

const Main = styled.div`
    max-width: 1000px;
    margin: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    min-height: 90vh;
`;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'HOME',
        };

        this.handlePageChang = this.handlePageChang.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
    }

    handlePageChang(newPage) {
        this.setState({
            page: newPage,
            toggle:false,
        });
    }
    toggleButton () {
        this.setState({
            toggle: !this.state.toggle,
        });
    }

    render() {
        const { page , toggle} = this.state;

        return (
            <Main>
                <Header 
                    onPageChange={this.handlePageChang}
                    toggleButton={this.toggleButton}
                    page={page}
                    toggle={toggle}
                />
                <Pages page={page}/>
                <Footer />
            </Main>
        );
    }
};

export default App;