import { useEffect, useRef, useState } from "react"
import { FiUpload } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"

import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(null)

  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      previewFile(file)
    }
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleFileUpload = () => {
    try {
      setLoading(true)
      const formData = new FormData()
      formData.append("displayPicture", imageFile)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])

  return (
    <div className="flex flex-col gap-4 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 md:flex-row md:items-center md:justify-between md:gap-4 md:p-8 md:px-12 text-richblack-5">

      {/* Profile Pic and Text */}
      <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
        <img
          src={previewSource || user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-20 rounded-full object-cover md:w-[78px]"
        />
        <p className="text-center text-sm md:text-left md:text-base font-semibold">
          Change Profile Picture
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/png, image/gif, image/jpeg"
        />

        <button
          onClick={handleClick}
          disabled={loading}
          className="rounded-md bg-richblack-700 px-5 py-2 text-sm font-semibold text-richblack-50 transition-all duration-200 hover:bg-richblack-600"
        >
          Select
        </button>

        <IconBtn
          text={loading ? "Uploading..." : "Upload"}
          onclick={handleFileUpload}
        >
          {!loading && (
            <FiUpload className="text-lg text-richblack-900" />
          )}
        </IconBtn>
      </div>

    </div>
  )
}
