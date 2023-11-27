import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

export const getUserAccessToken = (): string | null => {
  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : null;
  const accessToken = user?.accessToken || null;

  if (accessToken !== null) {
    const decodedToken = jwtDecode<{ exp: number }>(accessToken);
    const currentTimestamp = Date.now() / 1000;

    if (decodedToken.exp !== undefined && decodedToken.exp < currentTimestamp) {
      console.log("TOken ok!");
      localStorage.removeItem("user");
      // navigate("/login");
    }
  }
  return accessToken;
};

export const getUserList = () => {
  const userlistJSON = localStorage.getItem("userlist");
  const userlist = userlistJSON ? JSON.parse(userlistJSON) : null;
  return userlist;
};
