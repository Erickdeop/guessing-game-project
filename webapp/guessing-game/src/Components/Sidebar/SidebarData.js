import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MoneyIcon from '@mui/icons-material/Money';

export const SidebarData = [
    {
        title: "home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "leaderboard",
        icon: <LeaderboardIcon />,
        link: "/leaderboard"
    },
    {
        title: "games",
        icon: <HomeIcon />,
        link: "/games"
    },
    {
        title: "guessNumber",
        icon: <MoneyIcon />,
        link: "/home"
    },
    {
        title: "settings",
        icon: <SettingsIcon />,
        link: "/settings"
    }
]