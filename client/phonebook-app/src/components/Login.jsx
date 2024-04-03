import "../components-style/login.css";

export default function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              className='form-control'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='form-control'
            />
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
