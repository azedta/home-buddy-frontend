import React from 'react'
import { FaBuilding, FaCheckCircle, FaEdit, FaStreetView, FaTrash } from 'react-icons/fa';
import { MdLocationCity, MdPinDrop, MdPublic } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { selectUserCheckoutDose } from '../../store/actions';

const DoseList = ({ doses, setSelectedDose, setOpenDoseModal, setOpenDeleteModal }) => {
    const dispatch = useDispatch();
    const { selectedUserCheckoutDose } = useSelector((state) => state.auth);

    const onEditButtonHandler = (doses) => {
        setSelectedDose(doses);
        setOpenDoseModal(true);
    };

    const onDeleteButtonHandler = (doses) => {
        setSelectedDose(doses);
        setOpenDeleteModal(true);
    };

    const handleDoseSelection = (doses) => {
        dispatch(selectUserCheckoutDose(doses));
    };

    return (
        <div className='space-y-4'>
            {doses.map((dose) => (
                <div
                    key={dose.doseId}
                    onClick={() => handleDoseSelection(dose)}
                    className={`p-4 border rounded-md cursor-pointer relative ${selectedUserCheckoutDose?.doseId === dose.doseId
                            ? "bg-green-100"
                            : "bg-white"
                        }`}>
                    <div className="flex items-start">
                        <div className="space-y-1">
                            <div className="flex items-center ">
                                <p className='font-semibold'>{dose.medicationName}</p>
                                {selectedUserCheckoutDose?.doseId === dose.doseId && (
                                    <FaCheckCircle className='text-green-500 ml-2' />
                                )}
                            </div>

                            <div className="flex items-center ">
                                <p>{dose.timeFrequency}</p>
                            </div>

                            <div className="flex items-center ">
                                <p>{dose.days}, {dose.time}</p>
                            </div>

                            <div className="flex items-center ">
                                <p>{dose.period}</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex gap-3 absolute top-4 right-2">
                        <button onClick={() => onEditButtonHandler(dose)}>
                            <FaEdit size={18} className="text-teal-700" />
                        </button>
                        <button onClick={() => onDeleteButtonHandler(dose)}>
                            <FaTrash size={17} className="text-rose-600" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DoseList