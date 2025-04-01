import { useState } from "react";
import { IoMdBasket } from "react-icons/io";
import MedicationViewModal from "../shared/MedicationViewModal";
import truncateText from "../../utils/truncateText";

const MedicationCard = ({
    medicationId,
    medicationName,
    medicationForm,
    medicationStrength,
    medicationDescription,
    quantity
}) => {
    const [openMedicationViewModal, setOpenMedicationViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewMedication, setselectedViewMedication] = useState("");
    //const isAvailable = quantity && Number(quantity) > 0;
    const isAvailable = true; // UPDATE LATER

    const handleMedicationView = (medication) => {
        setselectedViewMedication(medication);
        setOpenMedicationViewModal(true);
    };

    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div onClick={() => {
                handleMedicationView({
                    id: medicationId,
                    medicationName,
                    medicationForm,
                    medicationStrength,
                    medicationDescription,
                    quantity
                })
            }}
                className="w-full overflow-hidden">

                <div className="p-4 w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-95">
                    <h2 onClick={() => {
                        handleMedicationView({
                            id: medicationId,
                            medicationName,
                            medicationForm,
                            medicationStrength,
                            medicationDescription,
                            quantity
                        })
                    }}
                        className="text-lg font-semibold mb-1 cursor-pointer">
                        {truncateText(medicationName, 50)}
                    </h2>

                    <div className="text-gray-700 font-normal mb-4">
                        {medicationForm}
                    </div>

                    <div className="min-h-20 max-h-20  mb-4">
                        <p className="text-gray-600 text-sm">
                            {truncateText(medicationDescription, 200)}
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col" >
                            <span className="text-gray-700 font-medium">
                                {Number(medicationStrength)} mg
                            </span>
                        </div>
                        <button
                            disabled={!isAvailable || btnLoader}
                            onClick={() => { }}
                            className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
                        text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-45 flex justify-center `}>
                            <IoMdBasket className="mr-2" />
                            {isAvailable ? "Add to Treatment" : "Stock Out"}
                        </button>
                    </div>
                    <MedicationViewModal
                        open={openMedicationViewModal}
                        setOpen={setOpenMedicationViewModal}
                        medication={selectedViewMedication}
                        isAvailable={isAvailable}
                    />
                </div>
            </div>
        </div>
    )
}

export default MedicationCard;