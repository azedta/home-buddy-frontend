import Skeleton from "../shared/Skeleton";
import React, { useState } from "react";
import { CgPill } from "react-icons/cg";
import DoseInfoModal from "./DoseInfoModal";
import AddDoseForm from "./AddDoseForm";
import { useSelector } from "react-redux";
import DoseList from "./DoseList";
import { useDispatch } from "react-redux";
import { DeleteModal } from "./DeleteModal";
import { deleteUserDose } from '../../store/actions';


const DoseInfo = ({ dose }) => {

    const [openDoseModal, setOpenDoseModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedDose, setSelectedDose] = useState("");
    const addNewDoseHandler = () => {
        setSelectedDose("");
        setOpenDoseModal(true);
    }

    const dispatch = useDispatch();

    const deleteDoseHandler = () => {
        dispatch(deleteUserDose(
            toast,
            selectedDose?.doseId,
            setOpenDeleteModal
        ))
    };

    const noDoseExist = !dose || dose.length === 0;
    const { isLoading, btnLoader } = useSelector((state) => state.errors);


    return (
        <div className='pt-4'>
            {noDoseExist ? (
                <div>
                    <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center">
                        <CgPill size={50} className="text-gray-500 mb-4" />
                        <h1 className="mb-2 textslate-900 text-center font-semibold text-2xl ">
                            No Medication Doses added yet
                        </h1>
                        <p className="mb-6 textslate-800 text-center ">
                            Please add your dose information to finalize treatment
                        </p>

                        <button
                            onClick={
                                addNewDoseHandler
                            }
                            className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-all">
                            Add Dose
                        </button>
                    </div>
                </div>
            ) : (
                <div className="relative p-6 rounded-lg max-w-md mx-auto">
                    <h1 className="textslate-800 text-center font-bold text-2xl ">
                        Select Dose Info
                    </h1>
                    {isLoading ? (
                        <div className="py-4  px-8">
                            <Skeleton />
                        </div>

                    ) : (
                        <>
                            <div className='space-y-4 pt-6'>
                                <DoseList
                                    doses={dose}
                                    setSelectedDose={setSelectedDose}
                                    setOpenDoseModal={setOpenDoseModal}
                                    setOpenDeleteModal={setOpenDeleteModal}
                                />
                            </div>

                            {dose.length > 0 && (
                                <div className='mt-4'>
                                    <button
                                        onClick={addNewDoseHandler}
                                        className='px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-all'>
                                        Add More
                                    </button>
                                </div>
                            )}
                        </>
                    )}


                </div>
            )}


            <DoseInfoModal
                open={openDoseModal}
                setOpen={setOpenDoseModal} >
                <AddDoseForm
                    dose={selectedDose}
                    setOpenDoseModal={setOpenDoseModal} >
                </AddDoseForm>
            </DoseInfoModal>

            <DeleteModal
                open={openDeleteModal}
                loader={btnLoader}
                setOpen={setOpenDeleteModal}
                title="Delete Dose"
                onDeleteHandler={deleteDoseHandler}
            />

        </div>
    )
}

export default DoseInfo;