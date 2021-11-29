import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Cards() {
    return (
        <div className = 'cards'>
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src="https://plus.moe-online.ru/media_new/6/2/4/0/4/5/8797d924161e0a1dd3602a695715d817/8797d924161e0a1dd3602a695715d817-thumb_1920.jpg" 
                style={{ height: '180px' }}
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src="https://i.ytimg.com/vi/Mmln8Wz1JE8/maxresdefault.jpg"
                style={{ height: '180px' }}
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" src="https://mtdata.ru/u15/photoDBFA/20256359584-0/original.jpg" 
                style={{ height: '180px' }}
                />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
