import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PageTitle from "../component/PageTitle";

const UpdateProfile = () => {
  const { user, updateProfileInfo } = useContext(AuthContext);

  const handleUpdateProfile =(e) =>{
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    
    updateProfileInfo(name, photo)
      .then(result =>{
        console.log(result);
      })
      .catch(error =>{
        console.log(error);
      });
  }

  return (
    <div className="border-2 border-violet-700 rounded-xl mt-5 lg:mt-10 p-5 lg:p-10 w-full lg:w-96 mx-auto">
      <PageTitle title="pPortal-profile"></PageTitle>

      <form className="flex gap-5 flex-col justify-center items-center" onSubmit={handleUpdateProfile}>
        <h1 className="font-bold text-4xl underline text-primary">My Profile</h1>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={user.displayName}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="photo"
            defaultValue={user.photoURL}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        
        <button type="submit" className="btn btn-secondary px-10">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
