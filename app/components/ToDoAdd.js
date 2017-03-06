import React, {PropTypes} from 'react';
import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';
import Input from 'muicss/lib/react/input';
import Row from 'muicss/lib/react/Row';
import Col from 'muicss/lib/react/Col';
import Button from 'muicss/lib/react/Button';
import ToDoItem from './ToDoItem';
import Status from './Status';


const ToDoAdd = (props)=>{
    return (
        <div>
            <Panel>
                <Container fluid={true} className="mui--text-center">
                    <Form onSubmit={props.onAddItem}>
                        <Row>
                            <Col md="10">
                                <Input hint="What do you want to do?"/>
                            </Col>
                            <Col md="2">
                                <Button type="submit" variant="fab" size="small">+</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Panel>
            <Status onClear={props.onClear} />
            {props.todos.map((todo, index)=>
                <ToDoItem 
                    key={index}
                    onDelete={props.onDeleteTodo}
                    index={index}
                    todo={todo}
                    onClick={props.onClickTodo}
                />
            )};
        </div>
    )
}

ToDoAdd.propTypes={
    onAddItem: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onClickTodo: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
}


export default ToDoAdd ;