import Banner from 'components/Banner';
import ImageSrc from 'constants/images';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectPhotos } from 'features/Photo/photoSlice';
import PhotoList from 'features/Photo/components/PhotoList';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(selectPhotos);
  console.log('List of photos: ', photos);

  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={ImageSrc.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>

      <PhotoList photoList={photos} />
    </div>
  );
}

export default MainPage;
