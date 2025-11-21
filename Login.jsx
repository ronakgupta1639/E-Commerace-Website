import React, { useReducer } from 'react'



const initialState = {
  values: {
    email: '',
    password: '',
    remember: false,
  },
  errors: {},
  touched: {},
  submitting: false,
  submitSuccess: null,
}

function validate(values) {
  const errors = {}
  if (!values.email) errors.email = 'Email required'
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    errors.email = 'Invalid email address'

  if (!values.password) errors.password = 'Password required'
  else if (values.password.length < 6)
    errors.password = 'Password must be at least 6 characters'

  return errors
}

function reducer(state, action) {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
      }
    case 'FIELD_BLUR':
      return {
        ...state,
        touched: { ...state.touched, [action.field]: true },
        errors: validate({ ...state.values, [action.field]: state.values[action.field] }),
      }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'SUBMIT_START':
      return { ...state, submitting: true, submitSuccess: null }
    case 'SUBMIT_SUCCESS':
      return { ...state, submitting: false, submitSuccess: true }
    case 'SUBMIT_FAILURE':
      return { ...state, submitting: false, submitSuccess: false }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { values, errors, touched, submitting, submitSuccess } = state

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    dispatch({ type: 'FIELD_CHANGE', field: name, value: type === 'checkbox' ? checked : value })
  }

  function handleBlur(e) {
    const { name } = e.target
    dispatch({ type: 'FIELD_BLUR', field: name })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(values)
    if (Object.keys(validationErrors).length) {
      dispatch({ type: 'SET_ERRORS', errors: validationErrors })
      return
    }

    try {
      dispatch({ type: 'SUBMIT_START' })
      // Simulate async login call
      await new Promise((res) => setTimeout(res, 900))

      // Example: simple fake auth check (replace with real API call)
      if (values.email === 'user@example.com' && values.password === 'password') {
        dispatch({ type: 'SUBMIT_SUCCESS' })
        // Do post-login actions here (navigate, store token, etc.)
        alert('Login successful!')
      } else {
        dispatch({ type: 'SUBMIT_FAILURE' })
        dispatch({ type: 'SET_ERRORS', errors: { form: 'Invalid email or password' } })
      }
    } catch (err) {
      dispatch({ type: 'SUBMIT_FAILURE' })
      dispatch({ type: 'SET_ERRORS', errors: { form: 'Something went wrong' } })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        {errors.form && (
          <div className="text-sm text-red-600 mb-4">{errors.form}</div>
        )}

        <label className="block mb-3">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              touched.email && errors.email ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {touched.email && errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </label>

        <label className="block mb-3">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your password"
            className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              touched.password && errors.password ? 'border-red-400' : 'border-gray-200'
            }`}
          />
          {touched.password && errors.password && (
            <p className="text-xs text-red-600 mt-1">{errors.password}</p>
          )}
        </label>

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="remember"
            checked={values.remember}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <span className="text-sm">Remember me</span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-2 rounded-xl bg-blue-600 text-white font-medium disabled:opacity-60"
        >
          {submitting ? 'Logging in...' : 'Login'}
        </button>

        <div className="mt-4 text-center text-sm">
          <button
            type="button"
            onClick={() => dispatch({ type: 'RESET' })}
            className="underline"
          >
            Reset
          </button>
        </div>

        {submitSuccess === true && (
          <p className="mt-3 text-blue-600 text-sm text-center">Login successful</p>
        )}
        {submitSuccess === false && !errors.form && (
          <p className="mt-3 text-red-600 text-sm text-center">Login failed</p>
        )}

        <p className="mt-6 text-xs text-gray-500 text-center">Tip: try user@example.com / password</p>
      </form>
    </div>
  )
}
