import { useState, useEffect, createContext } from "react";
import { Token } from "../api/token";
import { User } from "../api/user";
import { User as UserFb } from "../api/fb.user";

const tokenCtrl = new Token();
const userCtrl = new User();
const UserCtrl = new UserFb();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [User, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();

      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  useEffect(() => {
  }, [User]);
  

  const login = async (token, uid) => {
    try {
      tokenCtrl.setToken(token);
      const response = await UserCtrl.getMe(uid); // Asegúrate de esperar a que esta promesa se resuelva
      setUser(response); // Aquí probablemente quieras establecer el usuario en el estado, no el token
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  

  const logout = () => {
    tokenCtrl.removeToken();
    setToken(null);
    setUser(null);
  };

  const updateUser = (data) => {
    setUser(data);
  };

  const data = {
    accessToken: token,
    User,
    login,
    logout,
    updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
