import { useState, useContext } from "react";

class RoleAndPermission {

  getAllRoles = () => {
    return {
      ROLE_ADMIN: ["manageUser", "manageRapport"],
    };
  };

  getUserRoles = () => {

    return {
      ROLE_ADMIN: ["", "manageUser"],
    };

  };

}

export default new RoleAndPermission();
