import React from "react"
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"
function Footer() {
  return (
    <div name="footer" className="w-full  text-whte justify-center p-4">
      <hr />
      <ul className="flex justify-center text-center text-4xl mt-3 ">
        <li>
          <AiFillGithub
            onClick={() =>
              window.open("https://github.com/ahmdfauzy15", "_blank")
            }
            className='cursor-pointer'

          />
        </li>

        <li>
          <AiOutlineLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/achmad-fauzy-262878157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjBNJjttESy6DRuUs8PgdVw%3D%3D",
                "_blank"
              )
            }
            className='cursor-pointer'
          />
        </li>
        <p className="text-lg mt-1 ">AF Profile Portofolio Website</p>
      </ul>
    </div>
  )
}

export default Footer
