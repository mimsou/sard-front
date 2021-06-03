import React from "react";
import AuthService from "../services/auth.service";
import RoleAndPermission from "../services/RoleAndPermissionService";

const Permit = (props) => {
  const UserHaveAccess = () => {
    
    const userRole = RoleAndPermission.getUserRoles();
    const [role, permission] = props.perm.split(".");

    if (userRole[role]) {
      if (userRole[role].find((o) => o === permission)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  if (UserHaveAccess()) {
    return <>{props.children}</>;
  } else {
    return "";
  }
};

export default Permit;
