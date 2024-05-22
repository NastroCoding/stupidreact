import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      return navigate("/recipes");
    }
  }, [navigate]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://127.0.0.1:8000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: username,
      password: password,
    };

    const fetchApi = await fetch(`${url}/api/auth/login`, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetchApi.json();
    if (response.status == "success") {
      sessionStorage.setItem("token", response['toket gede']);
      return navigate("/recipes");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <h1 className="text-center mb-4">Gaming Portal</h1>
              <div className="card card-default">
                <div className="card-body">
                  <h3 className="mb-3">Sign In</h3>

                  <form method="post" onSubmit={handleSubmit}>
                    <div className="form-group my-3">
                      <label htmlFor="username" className="mb-1 text-muted">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        autoFocus
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="password" className="mb-1 text-muted">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <div className="mt-4 row">
                      <div className="col">
                        <button type="submit" className="btn btn-primary w-100">
                          Sign In
                        </button>
                      </div>
                      <div className="col">
                        <a
                          href="Gaming Portal/signup.html"
                          className="btn btn-danger w-100"
                        >
                          Sign up
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
