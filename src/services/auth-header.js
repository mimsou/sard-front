import AuthService from "./auth.service"
export default function authHeader() {

  const decodedjwt = AuthService.decodeJwt();

  const jwt  = AuthService.getToken();

  console.log(jwt)
 
  if (jwt) {
    return { Authorization: 'Bearer ' + jwt };
  }else{
    return "";
  }
}
