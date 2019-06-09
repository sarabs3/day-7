import React from 'react';
import { Button } from 'reactstrap';
const Welcome = ({ match, history }) => (
    <>
    <h2>Welcome to page {match.params.name}</h2>
    <Button onClick={() => history.push('/contact')} color="primary">Click</Button>
    </>
);

export default Welcome;
