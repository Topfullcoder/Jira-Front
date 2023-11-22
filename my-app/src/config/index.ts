export const getToken = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const token = user?.accessToken;
  return token;
};

export default getToken;
