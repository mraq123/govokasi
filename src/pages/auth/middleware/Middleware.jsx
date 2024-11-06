import axios from "axios";

// / Fungsi untuk mendapatkan data pengguna berdasarkan userId di localStorage
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });

    if (response.status === 200) {
      const { accessToken, id } = response.data;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("userId", id);

      const userData = await getLoggedInUserData();
      if (userData) {
        localStorage.setItem("userData", JSON.stringify(userData));
      }

      return response.data;
    } else {
      console.error("Login gagal: Status bukan 200");
      return null;
    }
  } catch (error) {
    console.error("Error saat login:", error);
    return null;
  }
};

// Fungsi untuk mendapatkan data pengguna berdasarkan userId di localStorage
export const getLoggedInUserData = async () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (!token || !userId) {
    return null;
  }

  try {
    const response = await axios.get(`https://dummyjson.com/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Mengembalikan data lengkap pengguna
  } catch (error) {
    console.error("Gagal mendapatkan data pengguna:", error);
    return null;
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await axios.post("https://dummyjson.com/users/add", {
      username,
      password,
    });

    if (response.status === 200 || response.status === 201) {
      console.log("Registrasi berhasil:", response.data);
      return response.data;
    } else {
      console.error("Registrasi gagal: Status bukan 200/201");
      return null;
    }
  } catch (error) {
    console.error("Error saat registrasi:", error);
    return null;
  }
};
