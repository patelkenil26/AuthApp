import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
    <div className=" px-4 py-8 md:px-10 lg:mx-28 lg:p-10">
      <h1 className="mb-8 text-2xl md:text-3xl font-semibold text-richblack-5">
        Edit Profile
      </h1>

      {/* Change Profile Picture */}
      <ChangeProfilePicture />

      {/* Profile */}
      <EditProfile />

      {/* Password */}
      <UpdatePassword />

      {/* Delete Account */}
      <DeleteAccount />
    </div>
  )
}
