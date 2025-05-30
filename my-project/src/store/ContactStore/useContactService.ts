import {create} from "zustand" 

interface contactStore{
    name: string,
    email: string,
    password: string,
    subject: string,
    phone: string,
    message: string,
    isAuthorized: boolean,
    setIsAuthorized: (isAuthorized: boolean) => void;

    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setpassword: (password: string) => void;
    setSubject: (subject: string) => void;
    setPhone: (phone:string) => void;
    setMessage: (message: string) => void;

    sendMail: () => void;
}   

export const useContactStore = create<contactStore>((set) => ({
    name: "",
    email: "",
    password: "",
    subject: "",
    phone: "",
    message: "",
    isAuthorized: false,

    setName: (name:string) => set({name}),
    setEmail: (email:string) => set({email}),
    setpassword: (password: string) => set({password}),
    setSubject: (subject:string) => set({subject}),
    setPhone: (phone:string) => set({phone}),
    setMessage: (message:string) => set({message}),
    setIsAuthorized:(isAuthorized:boolean) => set({isAuthorized}),

    sendMail: async () => {

        const informations = {
            name: useContactStore.getState().name,
            email: useContactStore.getState().email,
            password: useContactStore.getState().password,
            subject: useContactStore.getState().subject,
            phone: useContactStore.getState().phone,
            message: useContactStore.getState().message,
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}contact`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(informations)
            })
    
            if(!response) {
                throw new Error("Une erreur s'est produite lors de la soumission du formulaire")
            }
        } catch (error) {
            console.error({message: "Une erreur s'est produite lors de la soumission du formualaire :", error})
        }
    }
}))

