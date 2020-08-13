const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
  {
    title: 'Photo 1',
    categoryId: 194,
    photo: 'https://picsum.photos/id/194/300/300',
  },
  {
    title: 'Photo 2',
    categoryId: 195,
    photo: 'https://picsum.photos/id/195/300/300',
  },
  {
    title: 'Photo 3',
    categoryId: 196,
    photo: 'https://picsum.photos/id/196/300/300',
  },
  {
    title: 'Photo 4',
    categoryId: 197,
    photo: 'https://picsum.photos/id/197/300/300',
  },
  {
    title: 'Photo 5',
    categoryId: 198,
    photo: 'https://picsum.photos/id/198/300/300',
  },
  {
    title: 'Photo 6',
    categoryId: 199,
    photo: 'https://picsum.photos/id/199/300/300',
  },
  {
    title: 'Photo 200',
    categoryId: 200,
    photo: 'https://picsum.photos/id/200/300/300',
  },
  {
    title: 'Photo 201',
    categoryId: 201,
    photo: 'https://picsum.photos/id/201/300/300',
  },
  {
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
      state.push(newPhoto);
    },
  },
});

const { reducer, actions } = photoSlice;

// action creator
export const { addPhoto } = actions;

// selector
export const selectPhotos = (state) => state.photos;

// reducer
export default reducer;
