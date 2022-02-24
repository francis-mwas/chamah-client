import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContributionContext, useContributionDispatch } from 'hooks';
import { getAllContributions } from 'actions/contributionActions';
import Loader from 'components/Loader/Loader';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Contributions() {
  const contribDispatch = useContributionDispatch();
  const contributionsContext = useContributionContext();
  const { contributions, loading } = contributionsContext.contributions;
  const { contributionsDispatch } = contribDispatch;

  console.log('The contributions context: ', loading);
  let count = 1;
  useEffect(() => {
    getAllContributions(contributionsDispatch);
  }, [contributionsDispatch]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Link to="/admin/user-login/">
              <Button variant="primary" className="mb-3">
                Add A Contribution
              </Button>
            </Link>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">
                  Jamhurican Group Members Contributions
                </Card.Title>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                {loading ? <Loader /> : null}
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">First Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Target Amount</th>
                      <th className="border-0">Amount Paid</th>
                      <th className="border-0">Balance</th>
                      <th className="border-0">Date Deposited</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contributions.data
                      ? contributions.data.map((contribution) => (
                          <tr key={contribution.id}>
                            <td>{count++}.</td>
                            <td>Dakota</td>
                            <td>doe@gmail.com</td>
                            <td>{contribution.amount}</td>
                            <td>{contribution.amountPaid}</td>
                            <td>
                              {contribution.amount - contribution.amountPaid}
                            </td>
                            <td>
                              {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit',
                              }).format(new Date(contribution.dateDeposited))}
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Contributions;
