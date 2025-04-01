import { MdArrowBack} from "react-icons/md";
import { IoMdBasket } from "react-icons/io";
import { Link } from "react-router-dom";

const TreatmentEmpty = () => {
 return (
    <div className="min-h-[800px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
            <IoMdBasket size={80} className="mb-4 text-slate-500"/>
            <div className="text-3xl font-bold text-slate-700">
                Your treatment is empty
            </div>
            <div className="text-lg text-slate-500 mt-2">
                Add some medications to get started
            </div>
        </div>
        <div className="mt-6">
            <Link
                to="/medications"
                className="flex gap-2 items-center text-blue-500 hover:text-blue-600 transition">
                    <MdArrowBack size={24} />
                    <span className="font-medium">Start Browsing</span>
                </Link>
        </div>
    </div>
 )   
}

export default TreatmentEmpty;