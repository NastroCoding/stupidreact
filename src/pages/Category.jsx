import { useEffect, useState } from "react";
import Header from "../components/Header";

function Categories() {
  const [list, setList] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/categories");
    const data = await response.json();
    setList(data.categories);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Header />
      <div class="hero py-5 bg-light">
         <div class="container">
            <a href="/category/add" class="btn btn-primary">
               Add Category
            </a>
         </div>
      </div>
      <div className="list-form py-5">
        <div className="container">
          <h6 className="mb-3">List Category</h6>

          <table className="table table-striped">
            <thead>
              <tr>
                <th width="200">Category Name</th>
                <th width="500">Slug</th>
                <th width="180">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      {item.slug}
                    </td>
                    <td>
                      <a
                        to={'/detail/:slug'}
                        className="btn btn-sm btn-primary"
                      >
                        Detail
                      </a>
                      <a
                        to={'/update/:slug'}
                        className="btn btn-sm btn-secondary"
                      >
                        Update
                      </a>
                      <a href="#" className="btn btn-sm btn-danger">
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Categories;
