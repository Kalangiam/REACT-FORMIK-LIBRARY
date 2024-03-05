import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from "axios"
function BlogListing() {

  let DeleteBlog = async (id) => {
    try {
      await axios.delete(`https://65c8dadaa4fbc162e1124bb4.mockapi.io/employee/${id}`)
      alert("Deleted")
      getData()
    } catch (error) {
      console.log(error)
    }
  }
  const [blogList, setblogList] = useState([])
  let getData = async () => {
    try {
      const blogs = await axios.get("https://65c8dadaa4fbc162e1124bb4.mockapi.io/employee");
      setblogList(blogs.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-fluid">


      <h1 className="h3 mb-2 text-gray-800 font-weight-bold text-center" >BOOK RECORDS</h1>

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <p className="mb-4">Fill the details in the required space </p>
        <Link to="/portal/create-blog" className="d-none d-sm-inline-block btn btn-sm btn-warning text-dark">Add New Book</Link>
      </div>




      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">BookTable</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" >
              <thead>
                <tr>
                  <th>Book_Name</th>
                  <th>Author_name</th>
                  <th>Birth_Date</th>
                  <th>Biography</th>
                  <th>ISBN</th>
                  <th>Publication_Date</th>
                  <th>Author Details</th>
                  <th>Delete Book</th>
                </tr>
              </thead>
              <tbody>
                {
                  blogList.map((blog, index) => {
                    return (
                      <tr key={index}>
                        <td>{blog.Book_Name}</td>
                        <td>{blog.Author}</td>
                        <td>{blog.Birth_Date}</td>
                        <td>{blog.Biography}</td>
                        <td>{blog.ISBN}</td>
                        <td>{blog.Publication_Date}</td>

                        <td>
                          <Link to={`/portal/edit-blog/${blog.id}`} className='btn btn-info'>Edit</Link>

                        </td>
                        <td>
                          <button onClick={() => DeleteBlog(blog.id)} className='btn btn-danger'>Delete</button>
                        </td>

                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogListing