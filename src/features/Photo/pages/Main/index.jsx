import Banner from 'components/Banner';
import ImageSrc from 'constants/images';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={ImageSrc.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;