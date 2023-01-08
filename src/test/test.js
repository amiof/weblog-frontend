import axios from "axios";

axios.post("http://localhost:4000/user/signin", { username: "test1", password: "12546", email: "test23@test.com" })
  .then(Response => console.log(Response))

