export const loginUserMutation = async ({ username, password }) => {
  const loginUserResponse = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, username })
  }).then(response => response.json())
  return loginUserResponse
}
