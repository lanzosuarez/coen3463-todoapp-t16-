import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';
import Input from 'muicss/lib/react/input';
import Row from 'muicss/lib/react/Row';
import Col from 'muicss/lib/react/Col';
import Button from 'muicss/lib/react/Button';

function ToDoAdd(){
    return (
        <Panel>
             <Container fluid={true} className="mui--text-center">
                <Form>
                    <Row>
                        <Col md="10">
                            <Input hint="What do you want to do?" />
                        </Col>
                        <Col md="2">
                            <Button variant="fab" size="small">+</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Panel>
    )
}

export default ToDoAdd ;