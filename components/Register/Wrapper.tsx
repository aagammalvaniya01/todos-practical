"use client";

import React, { useState } from 'react'
import RegisterForm from './FormWrapper';
import usersData from '../../data/users.json'
import { Box, Container, Typography } from "@mui/material";

const RegisterWrapper = () => {
  const [users, setUsers] = useState(usersData);

  const handleRegister = (email: string, password: string) => {
    const newUser = { email, password };
    setUsers([...users, newUser]);
    alert('Registration successful!');
  };
  return (
    <>
      <Box
        sx={{
          background: "#F7F8F8",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            minHeight: "calc(100vh - 65px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            p={6}
            minWidth={{base: '100%', md: 650}}
          >
            <Box>
              <Typography mb={1} fontWeight={700} variant="h1" color='#00030A' textAlign={'center'} fontSize={40}>
                Register
              </Typography>
              <Typography color='#00030A' textAlign={'center'} variant="body1" mb={3}>
                Create An Account For Access Dashboard
              </Typography>
              <RegisterForm onRegister={handleRegister} />
            </Box>
          </Box>
        </Container>
      </Box>

    </>
  )
}

export default RegisterWrapper