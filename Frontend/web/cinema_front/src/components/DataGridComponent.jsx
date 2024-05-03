import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DataGridComponent = ({ columns, rows, pageSizeOptions, onEditClick, onDeleteClick, onDisplayClick }) => {
  // Adding fixed actions column to the columns array
  const updatedColumns = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => onDisplayClick(params.row)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={() => onEditClick(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDeleteClick(params.row)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={updatedColumns}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataGridComponent;
