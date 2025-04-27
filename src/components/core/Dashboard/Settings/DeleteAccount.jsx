import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <div className="my-10 flex flex-col gap-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-6 md:flex-row md:items-center md:gap-x-5 md:p-8 md:px-12">
      
      {/* Trash Icon */}
      <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-pink-700 md:h-14 md:w-14">
        <FiTrash2 className="text-2xl text-pink-200 md:text-3xl" />
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-3">
        <h2 className="text-base font-semibold text-richblack-5 md:text-lg">
          Delete Account
        </h2>

        <div className="text-sm text-pink-25 md:w-3/5">
          <p>Would you like to delete your account?</p>
          <p className="mt-1">
            This account may contain Paid Courses. Deleting your account is
            permanent and will remove all the content associated with it.
          </p>
        </div>

        <button
          type="button"
          className="w-fit cursor-pointer text-sm italic text-pink-300 hover:underline"
          onClick={handleDeleteAccount}
        >
          I want to delete my account.
        </button>
      </div>

    </div>
  )
}
