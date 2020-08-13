import PropTypes from 'prop-types';
import React from 'react';
import './Banner.scss';

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  title: 'Default title',
  backgroundUrl: '',
};

function Banner(props) {
  const { title, backgroundUrl } = props;
  const bgUrl = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};

  return (
    <section className="banner" style={bgUrl}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
}

export default Banner;
