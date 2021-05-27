import AuthService from "./auth.service"
export default function authHeader() {

  const jwt = AuthService.decodeJwt();

  if (jwt && jwt.token) {
    return { Authorization: 'Bearer ' + jwt.token };
  }else{
    return "";
  }
}
