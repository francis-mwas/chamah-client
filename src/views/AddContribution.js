import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { addContribution } from 'actions/contributionActions';
import { useContributionContext, useContributionDispatch } from 'hooks';
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

function AddContribution() {
  const dispatch = useContributionDispatch();
  const contribDetails = useContributionContext();
  const history = useHistory();
  const { contributionsDispatch } = dispatch;

  const [amount, setAmount] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [dateDeposited, setDateDeposited] = useState('');

  let getId = history.location.pathname;
  let newArr = getId.split('/');
  let userId = parseInt(newArr[newArr.length - 1]);

  const { contribution, errorMessage, loading } =
    contribDetails.addUserContribution;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await addContribution(contributionsDispatch, {
      amount,
      amountPaid,
      dateDeposited,
      userId,
    });
    setAmount('');
    setAmountPaid('');
    setDateDeposited('');
    onsole.log('The res: ', errorMessage);
    if (!response) return;
  };

  console.log('The contribDetails: ', contribDetails.addUserContribution);

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
                {loading && <Loader />}
                {errorMessage ? (
                  <p className={styles.error}>{errorMessage}</p>
                ) : null}

                <Form>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Amount</label>
                        <Form.Control
                          placeholder="amount"
                          type="text"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Amount paid</label>
                        <Form.Control
                          placeholder="Amount Paid"
                          type="text"
                          value={amountPaid}
                          onChange={(e) => setAmountPaid(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Form.Group>
                        <label>Date deposited</label>
                        <Form.Control
                          placeholder="Date Amount Deposited"
                          type="date"
                          value={dateDeposited}
                          onChange={(e) => setDateDeposited(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleSubmit}
                  >
                    Submit Contribution
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

export default AddContribution;
