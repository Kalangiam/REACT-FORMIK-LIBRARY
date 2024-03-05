import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function BlogEdit() {
  const params = useParams();
  const navigate = useNavigate();
  let [Blog, setBlog] = useState({})

  const { handleSubmit, setValues, values, handleChange } = useFormik({
    initialValues: {
      Author: "",
      Birth_Date: "",
      Biography: "",
    },

    validate: (values) => {
      console.log(values);
    },
    onSubmit: async (values) => {
      try {
        const blogResp = await axios.put(`https://65c8dadaa4fbc162e1124bb4.mockapi.io/employee/${params.id}`, values)
        alert("Edited");
        setBlog(blogResp.data);
        // getBlog()
        navigate("/portal/blogs")
        axios.get("https://65c8dadaa4fbc162e1124bb4.mockapi.io/employee", values)
      } catch (error) {
        console.log(error);
      }
    }
  })



  let getBlog = async () => {
    try {
      const blogResp = await axios.get(`https://65c8dadaa4fbc162e1124bb4.mockapi.io/employee/${params.id}`)
      setValues({
        Author: blogResp.data.Author,
        Birth_Date: blogResp.data.Birth_Date,
        Biography: blogResp.data.Biography
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBlog()
  }, [])
  return (


    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='p-6'>
            <h1 className='h4 text-gray-900 mb-4 font-weight-bold'>Edit Author Details</h1>
          </div>



          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Author_Name</label>
              <input type='text'
                name='Author'
                value={values.Author}
                onChange={handleChange}
                className="form-control form-control-user"
                id="exampleFirstName"
                placeholder='Author' />
            </div>
            <div className='form-group'>
            <label>Birth_date</label>
              <input type="date" className="form-control form-control-user"
                name='Birth_Date'
                value={values.Birth_Date}
                onChange={handleChange}
                id="exampleFirstDescription"
                placeholder='Birth_Date'></input>
            </div>
            <div className='form-group'>
            <label>Biography</label>
              <textarea className="form-control form-control-user"
                name='Biography'
                value={values.Biography}
                onChange={handleChange}
                id="exampleFirstDescription"
                placeholder='Biography'></textarea>
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-success ' value={"Update"} />
            </div>

          </form>


        </div>
      </div>
    </div>
  )
}

export default BlogEdit