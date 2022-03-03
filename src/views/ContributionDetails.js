import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useContributionContext, useContributionDispatch } from 'hooks';
import { getSingleContribution } from 'actions/contributionActions';
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

function ContributionDetail() {
  const dispatch = useContributionDispatch();
  const contribDetails = useContributionContext();
  const history = useHistory();

  const { loading, contributionDetail } = contribDetails;

  let getId = history.location.pathname;
  let newArr = getId.split('/');
  let id = parseInt(newArr[newArr.length - 1]);
  console.log('The id to help us in search: ', id);

  console.log(
    'The contributions detaiuls are here: ',
    contributionDetail.contribution
  );
  if (contributionDetail.contribution) {
    const { data } = contributionDetail.contribution;
    console.log('The data: ', data);
  }
  useEffect(() => {
    getSingleContribution(dispatch.contribDetailDispatch, id);
  }, [getId]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Contribution Details</Card.Title>
              </Card.Header>

              <Card.Body>
                {loading ? <Loader /> : null}
                {contributionDetail.contribution ? (
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>Contribution Target Amount</label>
                          <Form.Control
                            disabled
                            placeholder="Company"
                            type="text"
                            value={contributionDetail.contribution.data.amount}
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Amount Paid</label>
                          <Form.Control
                            placeholder="Username"
                            type="text"
                            value={
                              contributionDetail.contribution.data.amountPaid
                            }
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">Balance</label>
                          <Form.Control
                            placeholder="Email"
                            type="email"
                            value={
                              contributionDetail.contribution.data.amount -
                              contributionDetail.contribution.data.amountPaid
                            }
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Date Created</label>
                          <Form.Control
                            placeholder="Home Address"
                            disabled
                            type="text"
                            value={new Intl.DateTimeFormat('en-GB', {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit',
                            }).format(
                              new Date(
                                contributionDetail.contribution.data.createdAt
                              )
                            )}
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <label>Member Details</label>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>First Name</label>
                          <Form.Control
                            placeholder="Company"
                            type="text"
                            value="John Doe"
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label>Email</label>
                          <Form.Control
                            defaultValue="doe@gmail.com"
                            placeholder="Last Name"
                            type="text"
                            readOnly
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="clearfix"></div>
                  </Form>
                ) : null}
              </Card.Body>
            </Card>
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

export default ContributionDetail;
