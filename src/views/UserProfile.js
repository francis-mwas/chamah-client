import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useUserState, useUserDispatch } from 'hooks';
import { getUserDetails } from 'actions/userActions';
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

function User() {
  const dispatch = useUserDispatch();
  const userData = useUserState();
  const history = useHistory();
  const { userDetails } = userData;
  const { user } = userDetails;
  let getId = history.location.pathname;
  let newArr = getId.split('/');
  let id = parseInt(newArr[newArr.length - 1]);
  useEffect(() => {
    getUserDetails(dispatch.userDetailsDispatch, id);
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            {user ? (
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Profile</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>User Role</label>
                          <Form.Control
                            defaultValue="Creative Code Inc."
                            disabled
                            placeholder="Company"
                            type="text"
                            value={user.role}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Username</label>
                          <Form.Control
                            defaultValue={user.email}
                            placeholder="Username"
                            type="text"
                            value={user.email}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Form.Control
                            placeholder="Email"
                            type="email"
                            value={user.email}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>First Name</label>
                          <Form.Control
                            defaultValue="Mike"
                            placeholder="Company"
                            type="text"
                            value={user.firstName}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label>Last Name</label>
                          <Form.Control
                            defaultValue="Andrew"
                            placeholder="Last Name"
                            type="text"
                            value={user.lastName}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Date Created</label>
                          <Form.Control
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            disabled
                            type="text"
                            value={user.createdAt}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                    {/* <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Update Profile
                    </Button> */}
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            ) : null}
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require('assets/img/photo-1431578500526-4d9613015464.jpeg')
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                {user ? (
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require('assets/img/faces/face-3.jpg').default}
                      ></img>
                      <h5 className="title">
                        {user.firstName} {user.lastName}
                      </h5>
                    </a>
                    {/* <p className="description">michael24</p> */}
                  </div>
                ) : null}
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
