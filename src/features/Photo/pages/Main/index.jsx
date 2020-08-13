import Banner from 'components/Banner';
import ImageSrc from 'constants/images';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectPhotos, removePhoto } from 'features/Photo/photoSlice';
import PhotoList from 'features/Photo/components/PhotoList';

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector(selectPhotos);

  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}/edit`);
    console.log('Eidt: ', photo);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log('Remove: ', photo);
    dispatch(removePhoto(photo.id));
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={ImageSrc.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
