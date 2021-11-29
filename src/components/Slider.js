import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const slider = {
    height: '800px',
    background: 'cover'
}


export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style = {slider}>
                <img
                    className="d-block w-100"
                    src="https://telegra.ph/file/587ce56b6fc0e43dd59c5.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style = {slider}>
                <img
                    className="d-block w-100"
                    src="https://coinnetto.com/wp-content/uploads/2021/08/sec-tailanda-predlagaet-novye-pravila-dlya-hranitelej-czifrovyh-aktivov.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style = {slider}>
                <img
                    className="d-block w-100"
                    src="https://avatars.mds.yandex.net/get-zen_doc/3628719/pub_5f34c302b079422716e510c4_5f34c3d397d25b1c9c45d768/scale_1200"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
