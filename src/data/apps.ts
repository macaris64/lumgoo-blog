export interface App {
    id: string;
    title: string;
    description: string;
    link: string;
    policyLink: string;
}

export const apps: App[] = [
    {
        id: "pomodoro-app",
        title: "Pomodoro App",
        description: "Boost your focus and productivity with a simple, distraction-free Pomodoro timer. Track your sessions, review your progress, and build better habits effortlessly.",
        link: "#",
        policyLink: "/apps/pomodoro-app/privacy",
    }
];
