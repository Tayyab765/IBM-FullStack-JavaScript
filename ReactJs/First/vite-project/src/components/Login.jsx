export function UserName() {
  return (
    <div>
      <div>Username:</div>
      <input
        type="text"
        placeholder="Enter Username"
        className="border hover:bg-blue-50"
      />
    </div>
  );
}
export function Password() {
  return (
    <div>
      <div>Password:</div>
      <input
        type="password"
        placeholder="Enter password"
        className="border hover:bg-blue-50"
      />
    </div>
  );
}
function handlecluick() {
  alert("Login Sucessful");
}

export function Login() {
  return (
    <div>
      <div className="flex gap-10 font-light text-sm m-2 mt-4">
        <div className="cursor-pointer hover:text-blue-400">☑️Remember Me</div>
        <div className="cursor-pointer hover:text-blue-400">
          Forget Password
        </div>
      </div>
      <div
        onClick={handlecluick}
        className="bg-blue-500 items-center flex flex-col mt-2 rounded-sm p-1  cursor-pointer hover:shadow-2xl hover:bg-blue-600"
      >
        Login
      </div>
    </div>
  );
}

export function LoginForm() {
  return (
    <div className="bg-gray-200 p-10 rounded-lg flex flex-col items-center ">
      <div className="font-bold mb-3">Login Form</div>
      <UserName />
      <Password />
      <Login />
    </div>
  );
}

export default LoginForm;
