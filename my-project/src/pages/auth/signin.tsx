import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Signin() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { status } = useSession();  // Utilisation de useSession pour vérifier l'état

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Effectuer la soumission de l'authentification
        const res = await signIn("credentials", {
            redirect: false,
            name,
            password,
        });

        setLoading(false);

        if (res?.error) {
            setError(res.error);
        } else if (res?.ok) {
            // Après un succès de la connexion, redirigez vers le dashboard
            router.push("/Admin/dashBoard");
        }
    };

    // Vérifiez si la session existe et redirigez si elle est déjà active
    if (status === "authenticated") {
        router.push("/Admin/dashBoard");
    }

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center h-screen text-[#FDFAD5] w-full ">
                <h1 className="text-3xl">Formulaire de connexion</h1>
                <div className="mt-8">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="Name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="Name"
                                className="p-2 rounded w-full text-[#1E1E1E]"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="Password">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="Password"
                                className="p-2 rounded text-[#1E1E1E]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="submit"
                            className="w-full p-2 rounded bg-[#F97316]"
                            disabled={loading}
                        >
                            {loading ? "Chargement..." : "Connexion"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
