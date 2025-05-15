import {ReactNode, useEffect} from "react"
import { useRouter } from "next/navigation"

interface ForbiddenRoutesProps {
    children: ReactNode
    isAuthorized: boolean
}

export const ForbiddenRoutes = ({children, isAuthorized}:ForbiddenRoutesProps) => {

    const router = useRouter();

   useEffect(() => {
    if(!isAuthorized) {
        router.push("/")
    }
   }, [router, isAuthorized])
   if(!isAuthorized) return null 

   return <>{children}</>
}