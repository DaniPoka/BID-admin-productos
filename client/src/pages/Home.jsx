import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, Number } from 'formik';
import * as Yup from 'yup';


const Home = () => {
  const navigate = useNavigate();
  const initialValues = {
    title: '',
    price: '',
    description: ''
  }

  const AddErrors = Yup.object().shape({
    title: Yup.string()
      .min(3, 'we need at least 3 caracters')
      .required('Required'),
    price: Yup.number()
      .required('Required'),
    description: Yup.string()
      .min(3, 'we need at least 3 caracters')
      .required('Required'),
  });

  const createItem = async (values, actions) => {

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/item`, values);
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'GENIAL!!!',
          text: `Se ha agregado ${res.data.title} perfectamente!`,
        });

        actions.resetForm(initialValues);
        navigate('/');


      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oh no!',
        text: `Error: ${error?.response?.data?.message || error.message}`,
      })
    }
  }


  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={AddErrors}
      onSubmit={createItem}
    >
      {({ errors, touched }) => (
        <Form >
          <div className='formcontainer'>
            <div className='formleft'>
              <p>Title</p>
              <Field name="title" className="form-control" placeholder="Title" />
              {touched.title && errors.title && <div className="ms-3 mt-1 text-danger">{errors.title}</div>}
              <br></br>
              <p>price</p>
              <Field type="number"
                name="price" className="form-control" placeholder="Price"
              />
              {touched.price && errors.price && <div className="ms-3 mt-1 text-danger">{errors.price}</div>}
              <br></br>
              <p>Description</p>
              <Field name="description" as="textarea" className="form-control" placeholder="description" />
              {touched.description && errors.description && <div className="ms-1 mt-1 text-danger">{errors.description}</div>}
              <button type="submit" className="btn btn-primary mt-5">Create</button>
            </div>
            <div className='formright'>




            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Home