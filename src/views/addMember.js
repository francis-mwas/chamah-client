import React, { useState, useEffect } from 'react';
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
  const [message, setMessage] = useState(null);

  const { addMembers } = userState;
  const { loading, userData, error } = addMembers;

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    let response = await addNewUser(addMembersDispatch, {
      firstName,
      lastName,
      email,
      role,
      password,
    });
    console.log('The response: ', response);
    // setMessage('Member added successfully!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    if (!response) return;
  };

  console.log('The data am expecting: ', userState);

  console.log('The loading happening: ', loading);
  useEffect(() => {
    if (userData) {
      setMessage(userData.message);
      console.log('the message: ', userData.message);
    }
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              {loading && <Loader />}
              <Card.Header>
                <Card.Title as="h4">Add user contribution</Card.Title>
              </Card.Header>

              <Card.Body>
                {message ? <h4 style={{ color: 'green' }}>{message}</h4> : null}
                {error ? <p style={{ color: 'red' }}>{error}</p> : null}
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
                          type="text"
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
                          type="text"
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
                          placeholder="Member password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleSubmitUser}
                  >
                    Add Member
                  </Button> */}
                  <Button
                    className="btn-fill pull-right"
                    onClick={handleSubmitUser}
                    type="submit"
                    variant="info"
                    disabled={loading}
                  >
                    {loading ? <Spinner animation="grow" /> : '  Add Member'}
                  </Button>

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
