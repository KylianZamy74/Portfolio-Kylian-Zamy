import { useGetProjectsStore } from "@/store/FetchStore/getProjectsStore";

interface deleteModalProps {
    closeModal: () => void;
    projectId: number | null;
}

export default function DeleteModal( {closeModal, projectId}: deleteModalProps) {

    const {deleteProject} = useGetProjectsStore();

    const handleDeleteProject = async () => {
        if(projectId !== null) {
            await deleteProject(projectId);
        }
        closeModal();
        
};
    return(
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Êtes-vous sûr de vouloir supprimer ce projet ?
        </h2>
        <div className="flex justify-around mt-6">
          <button
            onClick={handleDeleteProject}
            className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition"
          >
            Supprimer
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400 transition"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
        </>
    )
}