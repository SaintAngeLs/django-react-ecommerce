import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container className='py-5'>
                <Row>
                    <Col md={6}>
                        <h4>New-WShop</h4>
                        <p>So why do graphics cards cost so much right now?
                            It's more than just the scalpers and cryptocurrency geeks that everyone likes to blame
                        </p>
                    </Col>
                    <Col md={3} >
                        <div>
                            <a href='https://goo.gl/maps/Jy2meESM4pJehZSo7' target="_blank" className='text-link'>
                                <i className='fa-solid fa-location-dot' /> Warsaw, Poland
                            </a>
                        </div>
                        <div>
                            <a href='tel:+(00)990000000' target="_blank" className='text-link'>
                                <i className='fa-solid fa-phone' /> +(48) 88 000 88 88
                            </a>
                        </div>
                        <div>
                            <a href='mailto:New-WShop@email.com' target="_blank" className='text-link'>
                                <i className='fa-solid fa-envelope' /> New-WShop@email.com
                            </a>
                        </div>

                    </Col>
                    <Col>
                        <div className='icons text-center p-2'>
                            <a href='https://www.instagram.com/' target="_blank"><i className="fa-brands fa-instagram-square" /></a>
                            <a href='https://www.facebook.com/' target="_blank"><i className="fa-brands fa-facebook-square" /></a>
                            <a href='https://www.linkedin.com/' target="_blank"><i className="fa-brands fa-linkedin" /></a>
                            <a href='https://www.google.com/' target="_blank"><i className="fa-brands fa-google-plus-square" /></a>
                            <a href='https://www.twitter.com/' target="_blank"><i className="fa-brands fa-twitter-square" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>Copyright &copy; New-WShop</Col>
                </Row>

            </Container>
        </footer >
    )
}

export default Footer
