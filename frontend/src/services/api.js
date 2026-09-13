const API_URL = 'http://localhost:5000'

export async function getTopics() {
  const response = await fetch(`${API_URL}/api/topics`)

  if (!response.ok) {
    throw new Error('Failed to fetch topics')
  }

  return response.json()
}

export async function getTopic(id) {
  const response = await fetch(`${API_URL}/api/topics/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch topic')
  }

  return response.json()
}

export async function getQuiz() {
  const response = await fetch(`${API_URL}/api/quiz`)

  if (!response.ok) {
    throw new Error('Failed to fetch quiz')
  }

  return response.json()
}

export async function submitQuiz(answers) {
  const response = await fetch(`${API_URL}/api/quiz/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ answers }),
  })

  const data = await response.json()

  if (!response.ok) {
    const error = new Error(
      data.error || 'Failed to submit quiz'
    )

    error.status = response.status

    throw error
  }

  return data
}

export async function getCurrentUser() {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    credentials: 'include',
  })

  if (response.status === 401) {
    return null
  }

  if (!response.ok) {
    throw new Error('Failed to check authentication')
  }

  const data = await response.json()

  return data.user
}

export async function loginUser(formData) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(formData),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Login failed')
  }

  return data
}

export async function registerUser(formData) {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Registration failed')
  }

  return data
}

export async function logoutUser() {
  const response = await fetch(`${API_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || 'Logout failed')
  }

  return data
}