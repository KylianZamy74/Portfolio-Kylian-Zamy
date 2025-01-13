import {useSession} from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface ProtectedRoutesProps {
    children: ReactNode;
    requiredRole: string;
}

const ProtectedRoute =({children, requiredRole}: ProtectedRoutesProps) => {
    
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status === "loading") {
            return;
        }

        if(!session || session.user.role !== requiredRole) {
            router.push("/auth/signin");
        }
    }, [status, session, requiredRole, router]);

    if(session?.user?.role === requiredRole) {
        return <>{children}</>;
    }
};

export default ProtectedRoute;


