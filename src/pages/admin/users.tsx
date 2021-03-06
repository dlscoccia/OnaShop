import { useState, useEffect } from 'react';
import { PeopleOutline } from '@mui/icons-material';
import useSWR from 'swr';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Grid, Select, MenuItem } from '@mui/material';

import { AdminLayout } from '../../shared/components/layouts';
import { IUser } from '../../core/interfaces';
import { onaApi } from '../../core/api';

const UsersPage = () => {
  const { data, error } = useSWR<IUser[]>('/api/admin/users');
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (!data && !error) return <></>;

  const onRoleUpdated = async (userId: string, newRole: string) => {
    const previosUsers = users.map((user) => ({ ...user }));
    const updatedUsers = users.map((user) => ({
      ...user,
      role: userId === user._id ? newRole : user.role,
    }));

    setUsers(updatedUsers);

    try {
      await onaApi.put('/admin/users', { userId, role: newRole });
    } catch (error) {
      setUsers(previosUsers);
      console.log(error);
      alert('Failed to update user role');
    }
  };

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Email', width: 500 },
    { field: 'name', headerName: 'Full Name', width: 500 },
    {
      field: 'role',
      headerName: 'Role',
      width: 300,
      renderCell: ({ row }: GridValueGetterParams) => {
        return (
          <Select
            value={row.role}
            label="Rol"
            onChange={({ target }) => onRoleUpdated(row.id, target.value)}
            sx={{ width: '300px' }}
          >
            <MenuItem value="admin"> Admin </MenuItem>
            <MenuItem value="client"> Client </MenuItem>
            <MenuItem value="super-user"> Super User </MenuItem>
            <MenuItem value="SEO"> SEO </MenuItem>
          </Select>
        );
      },
    },
  ];

  const rows = users.map((user) => ({
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
  }));

  return (
    <AdminLayout
      title={'Users'}
      subTitle={'Users management'}
      icon={<PeopleOutline />}
    >
      <Grid container className="fadeIn" sx={{ mt: 2 }}>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default UsersPage;