import React, { useState } from "react";

import RapportService from "../../../services/rapport-service";

import AuthService from "../../../services/auth.service";

import {
  PieChart,
  Share,
  Trash,
  Download,
  Archive,
  Command,
} from "@lifeomic/chroma-react/icons/lined";

import { IconButton } from "@lifeomic/chroma-react/components/IconButton";

import { Tooltip } from "@lifeomic/chroma-react/components/Tooltip";

import RapportComments from "./RepportComments";

import {
  TableModule,
  TableActionDivider,
} from "@lifeomic/chroma-react/components/TableModule";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Input,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

const UserReport = (props) => {
  const delay = 20000;

  let [commentIsOpen, setCommentIsOpen] = React.useState(false);

  const RepportsData = [
    {
      description: "Frozen yoghurt",
      calories: "159",
      fat: "6.0",
      carbs: "24",
    },
  ];

  const config = [
    {
      header: {
        label: "",
      },
      cell: {
        content: (dataValue) => {
          return <PieChart color={"#02bff1"}></PieChart>;
        },
      },
    },
    {
      header: {
        label: "Identifiant",
      },
      cell: {
        content: (dataValue) => {
          return dataValue.calories;
        },
      },
    },
    {
      header: {
        label: "Désignation",
      },
      cell: {
        content: (dataValue) => {
          return <strong>dataValue.fat</strong>;
        },
      },
    },
    {
      header: {
        label: "Date de création",
      },
      cell: {
        content: (dataValue) => {
          return dataValue.carbs;
        },
      },
    },
    {
      header: {
        label: "Origine",
      },
      cell: {
        content: (dataValue) => {
          return dataValue.carbs;
        },
      },
    },
  ];

  const loadUserLastSharedRapport = () => {
    const user = AuthService.getCurrentUser();
    RapportService.getSharedUserRapport(user).then((response) => {
       
    });
  };

  const ArchiverRapport = (row) => {
    console.log(`trash !`, row);
  };

  React.useEffect(() => {
    console.log(commentIsOpen);
  }, [commentIsOpen]);

  React.useEffect(() => {
    function tick() {
      loadUserLastSharedRapport();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  loadUserLastSharedRapport();

  return (
    <>
      <RapportComments
        idrapport={1}
        isopen={commentIsOpen}
        isOpenHundle={setCommentIsOpen}
      />
      <TableModule
        config={config}
        data={RepportsData}
        rowActions={(row) => (
          <>
            <Tooltip title="Command">
              <IconButton
                aria-label="Comment"
                icon={Command}
                color="inverse"
                onClick={(e) => {
                  e.stopPropagation();
                  e.currentTarget.blur();
                  setCommentIsOpen(true);
                }}
              />
            </Tooltip>
            <Tooltip title="Archive">
              <IconButton
                aria-label="Archive"
                icon={Archive}
                color="inverse"
                onClick={(e) => {
                  e.stopPropagation();
                  e.currentTarget.blur();
                  ArchiverRapport(row.calories);
                }}
              />
            </Tooltip>
            <TableActionDivider></TableActionDivider>
            <Tooltip title="Download">
              <IconButton
                aria-label="Download"
                icon={Download}
                color="inverse"
                onClick={(e) => {
                  e.stopPropagation();
                  e.currentTarget.blur();
                  console.log(`share ${row.description}!`);
                }}
              />
            </Tooltip>
          </>
        )}
      />
    </>
  );
};

export default UserReport;
