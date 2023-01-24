import React from 'react';

// component
import Header from '../../components/Header';

// mui
import { Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Box m="18px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dashboard" subtitle="Welcome to your dashboard" />
            </Box>
        </Box>
    );
};

export default Dashboard;