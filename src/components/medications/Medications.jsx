import { fetchMedications } from "../../store/actions";
import MedicationCard from "../shared/MedicationCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Filter from "./Filter";
import useMedicationFilter from "../../hooks/useMedicationFilter";
import Loader from "../shared/Loader";
import Paginations from "../shared/Paginations";


const Medications = () => {

    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );

    const { medications, pagination } = useSelector(
        (state) => state.medications
    )
    const dispatch = useDispatch();
    useMedicationFilter();


    // const medications = [{
    //     "medicationName": "Aspirin", 
    //     "medicationForm": "Capsule",
    //     "medicationStrength": "425", 
    //     "medicationDescription": "Aspirin is the genericized trademark for acetylsalicylic acid, a nonsteroidal anti-inflammatory drug used to reduce pain, fever, and inflammation, and as an antithrombotic.",
    //     "quantity" : 10
    //   }, 
    //   {
    //     "medicationName": "Doliprane", 
    //     "medicationForm": "Effervescent Tablet",
    //     "medicationStrength": "1000", 
    //     "medicationDescription": "Doliprane, or paracetamol, is a non-opioid analgesic and antipyretic agent used to treat fever and mild to moderate pain. It is a widely available over-the-counter drug sold under various brand names, including Tylenol and Panadol.",
    //     "quantity" : 0
    //   }]

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            <Filter />
            {isLoading ? (
                <Loader />
            ) : errorMessage ? (
                <div className="flex justify-center items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                    <span className="text-slate-800 text-lg font-medium">
                        {errorMessage}
                    </span>
                </div>
            ) : (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2x1:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                        {medications &&
                            medications.map((item, i) => <MedicationCard key={i} {...item} />
                            )}
                    </div>
                    <div className="flex justify-center pt-10">
                        <Paginations 
                            numberOfPage = {pagination?.totalPages}
                            totalMedications = {pagination?.totalElements}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Medications;