const Login = (props) => {
  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>User ID :</label>
          <input placeholder="User ID" type="text" />
        </div>
        <div className="field">
          <label>Password :</label>
          <input placeholder="password" type="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
