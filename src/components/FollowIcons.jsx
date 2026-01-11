import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

function FollowIcons() {
  return (
    <ul className="flex justify-start items-center gap-3">
                  <li>
                    <FontAwesomeIcon
                      className="hover:-translate-y-1.5 duration-300"
                      icon={faTwitter}
                      color="white"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="hover:-translate-y-1.5 duration-300"
                      icon={faFacebookF}
                      color="white"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="hover:-translate-y-1.5 duration-300"
                      icon={faDribbble}
                      color="white"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="hover:-translate-y-1.5 duration-300"
                      icon={faInstagram}
                      color="white"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="hover:-translate-y-1.5 duration-300"
                      icon={faYoutube}
                      color="white"
                    />
                  </li>
                </ul>
  )
}

export default FollowIcons