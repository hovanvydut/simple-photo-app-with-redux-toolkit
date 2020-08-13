import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {};

function PhotoForm(props) {
  const initialValues = {
    title: 'Title here',
    categoryId: null,
    photo: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    categoryId: Yup.number()
      .positive()
      .required('This field is required')
      .nullable(),
    photo: Yup.string().required('This field is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log('Submit: ', values)}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="Please fill your category"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
