import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

PhotoList.propTypes = {
  photoList: PropTypes.array.isRequired,
};

PhotoList.defaultPropTypes = {
  photoList: [],
};

function PhotoList(props) {
  const { photoList } = props;

  return (
    <Row>
      {photoList.map((photo, idx) => (
        <Col xs="12" md="6" lg="3" key={idx}>
          {photo.title}
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
