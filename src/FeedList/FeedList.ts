interface FeedItem {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    createdAt: Date;
    readTime: string;
    href: string;
}

export const FeedList: FeedItem[] = [
    {
        id: 1,
        title: "Cheat Sheet for Penetration Testing",
        description: "A quick reference of essential commands and tools used in web application penetration testing — from recon to exploitation.",
        image: "/feeds/cheat.png",
        tags: ["Cybersecurity", "Pentest", "Cheat Sheet"],
        createdAt: new Date("2025-10-26"),
        readTime: "5 min",
        href: "/feeds/cheat-sheet-pentest"
    },
    {
        id: 2,
        title: "Linux Basics: Commands & Directory Structure",
        description: "A comprehensive guide to essential Linux commands and an in-depth look at the Linux filesystem hierarchy — perfect for beginners and a solid refresher for everyone.",
        image: "/feeds/linux.jpg",
        tags: ["Linux", "Terminal", "Beginner"],
        createdAt: new Date("2026-05-14"),
        readTime: "8 min",
        href: "/feeds/linux-basics"
    },
];
