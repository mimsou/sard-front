import React from "react";
import AuthService from "../services/auth.service";
import RoleAndPermission from "../services/RoleAndPermissionService";

const Permit = (props) => {
  const UserHaveAccess = () => {
    const userRole = RoleAndPermission.getUserRoles();

    const [role, permission] = props.perm.split(".");

    if (userRole[role]) {
      console.log(permission in userRole[role]);
      console.log(userRole[role]);
      console.log(permission);
      if (permission   in userRole[role]) {
        console.log(userRole[role]);
        console.log(permission);
      }
    }

    return true;
  };

  if (UserHaveAccess()) {
    return <>{props.children}</>;
  } else {
    return "";
  }
};

export default Permit;
