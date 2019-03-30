export function isLoggedIn (state) {
  return !!state.accessToken
}

export function accessToken (state) {
  return state.accessToken
}
