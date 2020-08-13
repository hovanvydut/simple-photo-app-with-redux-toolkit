import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import './PhotoCard.scss';

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string,
    categoryId: PropTypes.number,
    photo: PropTypes.string,
  }),
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultPropTypes = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;
  const { title, categoryId, photo: linkImg } = photo;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(photo);
  };

  return (
    <Card className="photocard">
      <CardImg top width="100%" src={linkImg} alt={title} />
      <div className="photocard__overlay">
        <div className="photocard__title">{title}</div>
        <div className="photocard__button">
          <Button outline color="primary" onClick={handleEditClick}>
            Edit
          </Button>
          <Button outline color="danger" onClick={handleRemoveClick}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default PhotoCard;
