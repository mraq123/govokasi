import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const data = localStorage.getItem("userId");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const handlegetDataById = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/users/${data}`);
      console.log("profile", res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlegetDataById();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col ">
      <h1 className="font-poppins font-bold text-base mb-5">Profile</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          <p className="font-poppins ml-4">Loading...</p>
        </div>
      ) : (
        <div className="flex justify-between items-center px-5 mb-5">
          <div className="flex gap-2 items-center">
            <img src={user.image} alt="profile" className="w-16 rounded-full" />
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-bold font-poppins text-hh">
                {user.firstName}
              </h1>
              <h1 className="font-poppins text-hh ">{user.email}</h1>
            </div>
          </div>
          <div className="pr-10">
            <button className="bg-ungu rounded-lg px-5 py-1 text-white ">
              <h1 className="font-poppins text-hh">Edit</h1>
            </button>
          </div>
        </div>
      )}

      <form>
        <div className="px-5 flex gap-5">
          <div className="w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">First Name</label>
              <input
                type="text"
                value={user.firstName}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">Last Name</label>
              <input
                type="text"
                value={user.lastName}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">Age</label>
              <input
                type="number"
                value={user.age}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">Gender</label>
              <input
                type="text"
                value={user.gender}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">Phone Number</label>
              <input
                type="text"
                value={user.phone}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">Address</label>
              <input
                type="text"
                value={user.address?.address}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">County</label>
              <input
                type="text"
                value={user.address?.country}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">University</label>
              <input
                type="text"
                value={user.university}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">Bank</label>
              <input
                type="text"
                value={user.bank?.cardType}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins text-hh">City</label>
              <input
                type="text"
                value={user.address?.city}
                className="border border-gray-bg-gray-50 rounded-lg px-3 py-1"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
