import React, { Fragment, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import LogoutModal from "./logout-modal/LogoutModal";

export default function Header() {
  let [logoutModal, setLogoutModal] = useState(false);

  const onLogout = () => {
    setLogoutModal(true);
  };

  return (
    <Fragment>
      <div className="header">
        <Link to="/">
          <div className="logo">SNDP Salalah</div>
        </Link>
        <div className="logout" onClick={onLogout}>
          Logout
        </div>
      </div>
      <LogoutModal
        show={logoutModal}
        closeModal={() => setLogoutModal(false)}
      />
    </Fragment>
  );
}
