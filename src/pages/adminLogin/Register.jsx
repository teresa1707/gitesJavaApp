import axios from "axios";
import { useState } from "react";

export const Register = () => {
    const [adminName, setAdminName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/user/save", {
                adminName: adminName,
                email: email,
                password: password,
            });
            alert("Employee Registration Successfully");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div className="container">
                <div className="card">
                    <h1>Registration</h1>

                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="adminName"
                                placeholder="Enter Name"
                                value={adminName}
                                onChange={(event) => {
                                    setAdminName(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        <button type="submit" className="btn" onClick={save}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
