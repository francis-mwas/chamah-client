import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserState, useUserDispatch } from 'hooks';
import { getAllUsers } from 'actions/userActions';
import Loader from 'components/Loader/Loader';

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
import { logOut } from 'actions/userActions';

function ListUsers() {
  const dispatch = useUserDispatch();
  const usersList = useUserState();
  const { members } = usersList;
  const { loading } = members;

  let count = 1;

  useEffect(() => {
    getAllUsers(dispatch.dispatch);
  }, [dispatch.dispatch]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Jamhurican Group Members</Card.Title>
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
                      <th className="border-0">Last Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">User Role</th>
                      <th className="border-0">Total contributions</th>
                      <th className="border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* render a list of all members here  */}
                    {members.members.data
                      ? members.members.data.map((member, index) => (
                          <tr key={index}>
                            <td>{count++}</td>
                            <td>{member.firstName}</td>
                            <td>{member.lastName}</td>
                            <td>{member.email}</td>
                            <td>{member.role}</td>
                            <td>Ksh 89666</td>
                            <td>
                              <Button variant="info">
                                <Link to={`/admin/user/${member.id}`}>
                                  View User
                                </Link>
                              </Button>
                              {' | '}
                              <Button variant="warning">
                                <Link
                                  to={`/admin/add-contribution/${member.id}`}
                                >
                                  Add Contribution
                                </Link>
                              </Button>
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ListUsers;
