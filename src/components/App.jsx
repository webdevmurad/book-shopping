import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import axios from 'axios';
import Menu from './Menu';
import Filter from '../containers/Filter';
import BookCard from './BookCard';
import { Card } from 'semantic-ui-react';

class App extends Component {

    componentWillMount() {
        const { setBooks } = this.props;
        axios.get("/books.json").then(({data}) => {
            setBooks(data);
        });
    }

    render() {
        const { books, isReady} = this.props;
        return (
            <Container>
                <Menu/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {
                        !isReady ? 'Загрузка...'
                        : books.map((book, i) => (
                            <BookCard
                                key={i}
                                {...book}
                            />
                        ))
                    }
                </Card.Group>
            </Container>
            
        )
    }
}

export default App;
