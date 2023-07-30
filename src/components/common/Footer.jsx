import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
         <p data-aos='zoom-in'><h1>BIBEK NAYAK</h1></p>
        <p data-aos='zoom-in'><h1>CONTACT-NO=7847008989</h1></p>
        <p data-aos='zoom-in'><h1>@ COPY 2023</h1></p>

      </footer>
    </>
  )
}

export default Footer
