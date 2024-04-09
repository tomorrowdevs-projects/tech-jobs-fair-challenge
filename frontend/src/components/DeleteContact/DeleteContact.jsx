import React, { forwardRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePage } from "../../context/PageContext";
import useContacts from "../../hooks/fetchData";

const DeleteContact = forwardRef((props, ref) => {
    const {
        selectedContactId,
        active,
        activeClass,
        noActiveClass,
        customClass,
    } = props;

    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const { currentPage } = usePage();
    const { fetchContacts } = useContacts(currentPage);

    const handleFetchData = async () => {
        fetchContacts();
    };

    const handleDelete = async () => {
        let formData = new FormData();
        formData.append("id", selectedContactId);

        const fetchPromise = new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(
                    "https://tjf-challenge.azurewebsites.net/web/people/delete",
                    {
                        method: "DELETE",
                        body: formData,
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    resolve(data);
                    await handleFetchData();
                } else {
                    reject(new Error(`HTTP error! Status: ${response.status}`));
                }
            } catch (error) {
                reject(error);
            }
        });

        toast.promise(fetchPromise, {
            pending: "Loading...",
            success: "Deleted!",
            error: "Something went wrong",
        });
    };

    const handleDeleteConfirmation = async () => {
        setShowConfirmationModal(false);
        await handleDelete();
    };

    return (
        <>
            <button
                onClick={() => setShowConfirmationModal(true)}
                className={`${
                    active ? activeClass : noActiveClass
                } hover:bg-subdue hover:text-neutral  ${customClass}`}
            >
                Delete
            </button>
            {showConfirmationModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center">
                    <div className="absolute inset-0 bg-subdue opacity-75"></div>
                    <div className="bg-neutral w-1/3 p-6 rounded-lg z-50">
                        <p>Are you sure you want to delete this contact?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => setShowConfirmationModal(false)}
                                className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirmation}
                                className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accentDark"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                    <style jsx>{`
            @media (max-width: 768px) {
              .fixed.inset-0 > div:nth-child(2) {
                width: 90%; /* Adjust width as needed for smaller screens */
              }
            }
          `}</style>
                </div>
            )}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
});

export default DeleteContact;
