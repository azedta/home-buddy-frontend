import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removeFromTreatment } from "../../store/actions";
import toast from "react-hot-toast";
import truncateText from "../../utils/truncateText";

const MedicationContent = ({
    medicationId,
    medicationName,
    medicationForm,
    medicationStrength,
    medicationDescription,
    quantity,
    treatmentId,
}) => {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const removeMedicationFromTreatment = (treatmentMedications) => {
        dispatch(removeFromTreatment(treatmentMedications, toast));
    };

    return (
        <div className="grid md:grid-cols-4 grid-cols-4 md:text-md text-sm gap-4   items-center  border-[1px] border-slate-200  rounded-md  lg:px-4  py-4 p-2">
            <div className="md:col-span-1 justify-self-start flex  flex-col gap-2 ">
                <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start ">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
                        {truncateText(medicationName)}
                    </h3>
                </div>

                <div className="md:w-36 sm:w-24 w-12">

                    <div className="flex items-start gap-5 mt-3">
                        <button
                            onClick={() => removeMedicationFromTreatment({
                                medicationId,
                                medicationName,
                                medicationForm,
                                medicationStrength,
                                medicationDescription,
                                quantity,
                            })}
                            className="flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition-colors duration-200">
                            <HiOutlineTrash size={16} className="text-rose-600" />
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {Number(medicationStrength)} mg
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {medicationForm}
            </div>

            <div className="justify-self-center lg:text-[15px] text-sm text-slate-600 font-normal">
                {truncateText(medicationDescription, 40)}
            </div>

        </div>
    )
};

export default MedicationContent;