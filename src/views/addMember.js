import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { addNewUser } from 'actions/userActions';
import { useUserState, useUserDispatch } from 'hooks';
import Loader from 'components/Loader/Loader';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function AddMember() {
  const dispatch = useUserDispatch();
  const userState = useUserState();

  const { addMembersDispatch } = dispatch;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('normal-user');
  const [password, setPassword] = useState('');

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    let response = await addNewUser(addMembersDispatch, {
      firstName,
      lastName,
      email,
      role,
      password,
    });
    if (!response) return;
  };

  console.log('The contribDetails: ', userState);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add user contribution</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          placeholder="First Name"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          placeholder="Email"
                          type="date"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Role</label>
                        <Form.Control
                          placeholder="Role"
                          type="date"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Date Amount Deposited"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleSubmitUser}
                  >
                    Add Member
                  </Button>
                  {/* <button onClick={handleLogin} disabled={loading}>
                    {loading ? (
                      <Spinner animation="grow" />
                    ) : (
                      ' Submit Contribution'
                    )}
                  </button> */}
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddMember;
