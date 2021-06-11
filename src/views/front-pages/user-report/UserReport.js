import React, { useState } from "react";

import AuthService from "../../../services/auth.service";

import { PieChart,Share,Trash } from "@lifeomic/chroma-react/icons/lined";
 
import { IconButton } from '@lifeomic/chroma-react/components/IconButton';

import { Tooltip } from '@lifeomic/chroma-react/components/Tooltip';

import { TableModule,  TableActionDivider } from '@lifeomic/chroma-react/components/TableModule';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

 

const UserReport = (props) => {


  const config  = [
    {
      header: {
        label: '',
      },
      cell: {
        content: (dataValue) => {
          return  <PieChart color={"#02bff1"}></PieChart>;
        },
      },
    },
    {
      header: {
        label: 'Identifiant',
      },
      cell: {
        content: (dataValue) => {
          return dataValue.calories;
        },
      },
    },
    {
      header: {
        label: 'Désignation',
      },
      cell: {
        content: (dataValue) => {
          return <strong>dataValue.fat</strong>;
        },
      },
    },
    {
      header: {
        label: 'Date de création',
      },
      cell: {
        content: (dataValue) => {
          return dataValue.carbs;
        },
      },
    },
    {
      header: {
        label: 'Origine',
      },
      cell: {
        content: (dataValue) => {
          return dataValue.carbs;
        },
      },
    }
  ];
  
  const data = [
    {
      description: 'Frozen yoghurt',
      calories: '159',
      fat: '6.0',
      carbs: '24',
    },
    {
      description: 'Ice cream sandwich',
      calories: '237',
      fat: '9.0',
      carbs: '37',
    },
    {
      description: 'Eclair',
      calories: '262',
      fat: '16.0',
      carbs: '24',
    },
    {
      description: 'Cupcake',
      calories: '305',
      fat: '3.7',
      carbs: '67',
    },
  ];

  return (
    <>
      
      <TableModule config={config} data={data} rowActions={(row) => (
                      <>
                        <Button
                          variant="text"
                          color="inverse"
                          style={{ marginRight: '0.5rem' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.currentTarget.blur();
                          }}
                        >
                          Revoke
                        </Button>
                        <TableActionDivider ></TableActionDivider>
                        <Tooltip title="Share">
                          <IconButton
                            aria-label="Share"
                            icon={Share}
                            color="inverse"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.currentTarget.blur();
                              console.log(`share ${row.description}!`)
                            }}
                          />
                            </Tooltip>
                              <Tooltip title="Trash">
                          <IconButton
                            aria-label="Trash"
                            icon={Trash}
                            color="inverse"
                              onClick={(e) => {
                                e.stopPropagation();
                                e.currentTarget.blur();
                                console.log(`trash ${row.id}!`)
                              }}
                            />
                        </Tooltip>
                      </>
               )} />

          
    </>
  );
};

export default UserReport;
