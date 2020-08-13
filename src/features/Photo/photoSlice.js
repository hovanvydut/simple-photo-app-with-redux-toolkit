const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
  {
    id: 1,
    title: 'Photo 1',
    categoryId: 194,
    photo: 'https://picsum.photos/id/194/300/300',
  },
  {
    id: 2,
    title: 'Photo 2',
    categoryId: 195,
    photo: 'https://picsum.photos/id/195/300/300',
  },
  {
    id: 3,
    title: 'Photo 3',
    categoryId: 196,
    photo: 'https://picsum.photos/id/196/300/300',
  },
  {
    id: 4,
    title: 'Photo 4',
    categoryId: 197,
    photo: 'https://picsum.photos/id/197/300/300',
  },
  {
    id: 5,
    title: 'Photo 5',
    categoryId: 198,
    photo: 'https://picsum.photos/id/198/300/300',
  },
  {
    id: 6,
    title: 'Photo 6',
    categoryId: 199,
    photo: 'https://picsum.photos/id/199/300/300',
  },
  {
    id: 7,
    title: 'Photo 200',
    categoryId: 200,
    photo: 'https://picsum.photos/id/200/300/300',
  },
  {
    id: 8,
    title: 'Photo 201',
    categoryId: 201,
    photo: 'https://picsum.photos/id/201/300/300',
  },
  {
    id: 9,
    title: 'Photo 202',
    categoryId: 202,
    photo: 'https://picsum.photos/id/202/300/300',
  },
];

const photoSlice = createSlice({
  name: 'photos',
  initialState: initialState,
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      newPhoto.id = Math.floor(Math.random() * 1e6);
      state.push(newPhoto);
    },

    removePhoto: (state, action) => {
      const removedPhotoId = action.payload;
      return state.filter((photo) => photo.id !== removedPhotoId);
    },

    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIdx = state.findIndex((photo) => photo.id === newPhoto.id);

      if (photoIdx >= 0) {
        state[photoIdx] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photoSlice;

// action creator
export const { addPhoto, removePhoto, updatePhoto } = actions;

// selector
export const selectPhotos = (state) => state.photos;
export const selectPhotoById = (photoId) => (state) =>
  state.photos.find((photo) => photo.id === +photoId);

// reducer
export default reducer;
