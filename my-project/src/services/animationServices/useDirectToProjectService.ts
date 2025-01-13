import { useModalStore } from "@/store/ModalStore/useModalStore";
import { useRouter } from "next/router";

export default function useDirectToProjectService() {

   const { closeModal } = useModalStore();
    const router = useRouter();
  
    const goToProjects = async () => {
      // Ferme le menu
      closeModal();
  
      
      if (router.pathname !== "/") {
       
        await router.push("/");
      }
  
  
      const target = document.getElementById("my-work");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

  return {goToProjects}
}