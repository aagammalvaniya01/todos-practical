"use client";
import useAuth from '@/app/hooks/user'
import { deleteLocalStorage } from '@/app/services/local-storage';
import { ROUTES } from '@/app/services/routes'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from "next/navigation";

const Header = () => {
    const authStatus = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(authStatus);
    const router = useRouter();

    useEffect(() => {
        setIsLoggedIn(authStatus);
    }, [authStatus]);

    const handleLogout = useCallback(() => {
        deleteLocalStorage("isLoggedIn");
        setIsLoggedIn(false);
        router.push(ROUTES.HOME);
    }, [router]);

    return (
        <Box
            position={'fixed'}
            height={63}
            width={'100%'}
            zIndex={10}
            boxShadow={'0px 8px 16px 6px rgba(0, 0, 0, 0.08)'}
            sx={{
                background: 'linear-gradient(180deg, #FFF 0%, #E9FAF5 100%)'
            }}
            paddingX={6} paddingY={2}
        >
            <Box display={'flex'} justifyContent={'space-between'}>
                <Link href={ROUTES.HOME}>
                    <h1>LOGO</h1>
                </Link>
                {isLoggedIn ? (
                    <Button onClick={handleLogout}>Logout</Button>
                ) : (
                    <Box display={'flex'} alignItems={'center'} gap={4}>
                        <Link href={ROUTES.LOGIN}>
                            <Typography sx={{ "&:hover": { color: "#22CC9D" } }} fontWeight={600}>
                                Login
                            </Typography>
                        </Link>
                        <Link href={ROUTES.REGISTER}>
                            <Typography sx={{ "&:hover": { color: "#22CC9D" } }} fontWeight={600}>
                                Register
                            </Typography>
                        </Link>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default Header;
