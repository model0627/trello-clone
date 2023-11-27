"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";


const ProtectedPage = () => {
    const { user } = useUser();
    const { userId } = useAuth();

    return (
        <div>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}
export default ProtectedPage;