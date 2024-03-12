import { SidebarLink } from "@/types";

export const themes = [
    { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
    // { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
    {
        imgURL: "/assets/icons/home.svg",
        route: "/",
        label: "Home",
    },
    {
        imgURL: "/assets/icons/community.svg",
        route: "/community",
        label: "Community",
    },
    {
        imgURL: "/assets/icons/teams.svg",
        route: "/teams",
        label: "Teams",
    },
    {
        imgURL: "/assets/icons/tournoment.svg",
        route: "/tournoments",
        label: "Tournoments",
    },
    {
        imgURL: "/assets/icons/profile.svg",
        route: "/profile/bala",
        label: "Profile",
    },
    {
        imgURL: "/assets/icons/faq.svg",
        route: "/frequenty-asked",
        label: "FAQ",
    },
];

export const BADGE_CRITERIA = {
    QUESTION_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    QUESTION_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    TOTAL_VIEWS: {
        BRONZE: 1000,
        SILVER: 10000,
        GOLD: 100000,
    },
};