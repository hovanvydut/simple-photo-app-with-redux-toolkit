import Banner from 'components/Banner';
import React from 'react';
import './styles.scss';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPhoto,
  selectPhotoById,
  updatePhoto,
} from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMod = !photoId;
  const editedPhoto = useSelector(selectPhotoById(photoId));

  const initialValues = isAddMod
    ? {
        title: '',
        categoryId: null,
        photo: '',
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMod) {
          dispatch(addPhoto(values));
        } else {
          // EditMod
          dispatch(updatePhoto(values));
        }
        history.push('/photos');
      }, 2000);
      resolve(true);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMod={isAddMod}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
