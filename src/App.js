import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <a href={'https://react-bootstrap.netlify.com/layout/grid/'} target={'blank'}>
                            Documentação do bootstrap layout
                        </a>
                    </Col>
                    <Col md={6}>
                        <a href={'https://react-bootstrap.netlify.com/components/alerts/'} target={'blank'}>
                            Documentação dos componentes do bootstrap
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
