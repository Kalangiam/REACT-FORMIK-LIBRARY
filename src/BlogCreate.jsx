import React, { useEffect } from 'react';
import { Formik } from 'formik';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function BlogCreate() {

  const navigate = useNavigate();
  let initialValues = {
    Book_Name: "",
    Author: "",
    Birth_Date: "",
    Biography: "",
    ISBN: "",
    Publication_Date: "",

  }

  let validate = (values) => {
    if (values.Book_Name === "") {
      return { Book_Name: "Book_Name is required" }
    }
    if (values.Author === "") {
      return { Author: "Author is required" }
    }
    if (values.Birth_Date === "") {
      return { Birth_Date: "Birth_Date is required" }
    }
    if (values.Biography === "") {
      return { Biography: "Biography is required" }
    }
    if (values.ISBN === "") {
      return { ISBN: "ISBN is required" }
    }
    if (values.Publication_Date === "") {
      return { Publication_Date: "Publication_Date is required" }
    }
  }

  let onSubmit = async (values) => {
    try {
      axios.post("https://65c8dadaa4fbc162e1124bb4.mockapi.io/employee", values)
      navigate("/portal/blogs")
      axios.get("https://65c8dadaa4fbc162e1124bb4.mockapi.io/employee", values)
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='p-6'>
            <h1 className='h4 text-gray-900 mb-4 font-weight-bold'>New Book</h1>
          </div>
          <Formik initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            className='user'>

            {({ values, errors, handleChange, handleSubmit, handleBlur, touched }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input type='text'
                      name='Book_Name'
                      value={values.Book_Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control form-control-user ${errors.Book_Name ? 'border-danger' : 'border-primary'}`}
                      id="exampleFirstName"
                      placeholder='Book_Name' />
                  </div>
                  {errors.Book_Name && touched.Book_Name ? <div>{errors.Book_Name}</div> : null}
                  <div className='form-group'>
                    <input type="text" className={`form-control form-control-user ${errors.Author ? 'border-danger' : 'border-primary'}`}
                      name='Author'
                      value={values.Author}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="exampleFirstDescription"
                      placeholder='Author'></input>
                  </div>

                  {errors.Author && touched.Author ? <div>{errors.Author}</div> : null}
                  <div className='form-group'>
                    <input type="date" className={`form-control form-control-user ${errors.Birth_Date ? 'border-danger' : 'border-primary'}`}
                      name='Birth_Date'
                      value={values.Birth_Date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="exampleFirstDescription"
                      placeholder='Birth_Date'></input>
                  </div>

                  {errors.Birth_Date && touched.Birth_Date ? <div>{errors.Birth_Date}</div> : null}
                  <div className='form-group'>
                    <textarea className={`form-control form-control-user ${errors.Biography ? 'border-danger' : 'border-primary'}`}
                      name='Biography'
                      value={values.Biography}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="exampleFirstDescription"
                      placeholder='Biography'></textarea>
                    {errors.Biography && touched.Biography ? <div>{errors.Biography}</div> : null}
                  </div>
                  <div className='form-group'>
                    <input type='number'
                      name='ISBN'
                      value={values.ISBN}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control form-control-user ${errors.ISBN ? 'border-danger' : 'border-primary'}`}
                      id="exampleFirstName"
                      placeholder='ISBN'
                      maxlength="13" />
                  </div>
                  {errors.ISBN && touched.ISBN ? <div>{errors.ISBN}</div> : null}
                  <div className='form-group'>
                    <input type="date" className={`form-control form-control-user ${errors.Publication_Date ? 'border-danger' : 'border-primary'}`}
                      name='Publication_Date'
                      value={values.Publication_Date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="exampleFirstDescription"
                      placeholder='Publication_Date'></input>
                    {errors.Publication_Date && touched.Publication_Date ? <div>{errors.Publication_Date}</div> : null}
                  </div>
                  <div className='form-group'>
                    <input type='submit' className='btn btn-dark ' value={"Register Book"} />
                  </div>
                </form>
              )
            }}

          </Formik>
        </div>
      </div>
    </div>
  )
}

export default BlogCreate