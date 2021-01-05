import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PostList from '../components/postList/PostList';

const Home = () => {
  return (
    <Grid>
      <Row>
        <Col mdOffset={2} md={8} xs={12}>
          <PostList />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
