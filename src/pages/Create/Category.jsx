import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useEffect, useState} from "react";

function CategoryAdd() {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: name
        };

        const fetchApi = await fetch('http://127.0.0.1:8000/api/category', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const response = await fetchApi.json();
        if(response.status == 'success'){
            return navigate('/categories')
        }
    }

  return (
    <>
      <Header />
      <div class="hero py-5 bg-light">
        <div class="container text-center">
          <h2 class="mb-3">Add Category</h2>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-5 col-md-6">
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-item card card-default my-4">
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="title" className="mb-1 text-muted">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="title"
                        type="text"
                        placeholder="Category name"
                        className="form-control"
                        name="name"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 row">
                  <div className="col">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                  </div>
                  <div className="col">
                    <a
                      href="manage-games.html"
                      className="btn btn-danger w-100"
                    >
                      Back
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryAdd;
