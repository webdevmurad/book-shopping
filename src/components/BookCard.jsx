import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react';


const BookCard = ({ title, author, price, image }) => (
    <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{author}</span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <a href="#">
                <Icon name='rub' />
                {price}
            </a>
        </Card.Content>
    </Card>

)

export default BookCard;