import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MoneyIcon from '@mui/icons-material/Money';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "Leaderboard",
        icon: <LeaderboardIcon />,
        link: "/leaderboard",
    },
    {
        title: "Games",
        icon: <SportsEsportsIcon />,
        link: "/games",
    },
    {
        title: "Guess the Number",
        icon: <MoneyIcon />,
        link: "/guessNumber",
    },
    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings",
    },
];