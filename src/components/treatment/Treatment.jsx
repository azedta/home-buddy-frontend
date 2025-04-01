import { MdArrowBack } from "react-icons/md";
import { IoMdBasket } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MedicationContent from "./MedicationContent";
import TreatmentEmpty from "./TreatmentEmpty";

const Treatment = () => {
    const dispatch = useDispatch();
    const { treatment } = useSelector((state) => state.treatments);
    const newTreatment = { ...treatment };

    if (!treatment || treatment.length === 0) return <TreatmentEmpty />;

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-10">
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <IoMdBasket size={36} className="text-gray-700" />
                    Your Treatment
                </h1>
                <p className="text-lg text-gray-600 mt-2">All your selected medications</p>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-4 gap-4 pb-2 font-semibold items-center">
                <div className=" justify-self-start text-lg text-slate-800 lg:ps-4">
                    Medication
                </div>

                <div className="justify-self-center text-lg text-slate-800">
                    Strength
                </div>

                <div className="justify-self-center text-lg text-slate-800">
                    Form
                </div>

                <div className="justify-self-center text-lg text-slate-800">
                    Description
                </div>

            </div>

            <div>
                {treatment && treatment.length > 0 &&
                    treatment.map((item, i) => <MedicationContent key={i} {...item} />)}
            </div>

            <div className="border-t-[1.5px] border-slate-200 py-4 flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between gap-4">
                <div></div>
                <div className="flex text-sm gap-1 flex-col">
                    {/* <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
                        <span>Total</span>
                        <span>{newTreatment?.totalMedications} medications</span>
                    </div> */}

                    <p className="text-slate-500">
                        Medication Schedule will be added at checkout
                    </p>

                    <Link className="w-full flex justify-end" to="/checkout">
                        <button
                            onClick={() => { }}
                            className="font-semibold w-[300px] py-2 px-4 rounded-sm bg-customBlue text-white flex items-center justify-center gap-2 hover:text-gray-300 transition duration-500">
                            <IoMdBasket size={20} />
                            Complete
                        </button>
                    </Link>

                    <Link className="flex gap-2 items-center mt-2 text-slate-500" to="/medications">
                        <MdArrowBack />
                        <span>Continue Browsing</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Treatment;