import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoseInfo from "./DoseInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserDoses } from "../../store/actions";
import toast from 'react-hot-toast';
import Skeleton from '../shared/Skeleton';
import ErrorPage from '../shared/ErrorPage';
import ReminderMethod from './ReminderMethod';
import Completed from './Completed';



const Checkout = () => {

    const [activeStep, setActiveStep] = useState(0);
    const dispatch = useDispatch();
    const { isLoading, errorMessage } = useSelector((state) => state.errors);
    const { treatment, totalMedications } = useSelector((state) => state.treatments);
    const { dose, selectedUserCheckoutDose } = useSelector(
        (state) => state.auth
    )
    const { reminderMethod } = useSelector((state) => state.reminder || {});


    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleNext = () => {
        if (activeStep === 0 && !selectedUserCheckoutDose) {
            toast.error("Please select checkout dose before proceeding.");
            return;
        }

        if (activeStep === 1 && (!selectedUserCheckoutDose || !reminderMethod)) {
            toast.error("Please select medication dose before proceeding.");
            return;
        }

        setActiveStep((prevStep) => prevStep + 1);
    };

    const steps = [
        "Medication Dose",
        "Reminder Method",
        "Completed"
    ]

    useEffect(() => {
        dispatch(getUserDoses())
    }, [dispatch]);

    return (
        <div className='py-14 min-h-[calc(100vh-100px)]'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>

                ))}
            </Stepper>

            {isLoading ? (
                <div className='lg:w-[80%] mx-auto py-5'>
                    <Skeleton />
                </div>
            ) : (
                <div className="mt-5 ">
                    {activeStep === 0 && <DoseInfo dose={dose} />}
                    {activeStep === 1 && <ReminderMethod />}
                    {activeStep === 2 && <Completed />}

                </div>

            )}

<div
            className='flex justify-between items-center px-4 fixed z-50 h-24 bottom-0 bg-white left-0 w-full py-4 border-slate-200'
            style={{ boxShadow: "0 -2px 4px rgba(100, 100, 100, 0.15)" }}>
            <Button
                variant='outlined'
                disabled={activeStep === 0}
                onClick={handleBack}>
                    Back
            </Button>

            {activeStep !== steps.length - 1 && (
                <button
                    // disabled={
                    //     errorMessage || (
                    //         (activeStep === 0 ? !selectedUserCheckoutDose
                    //             : activeStep === 1 ? !reminderMethod
                    //             : true
                    //         )
                    //     )
                    // }
                    className={`bg-customBlue font-semibold px-6 h-10 rounded-md text-white
                       ${
                        errorMessage ||
                        (activeStep === 0 && !selectedUserCheckoutDose) ||
                        (activeStep === 1 && !reminderMethod)
                        ? "opacity-60"
                        : ""
                       }`}
                       onClick={handleNext}>
                    Proceed
                </button>
            )} 
        </div>
        
        {errorMessage && <ErrorPage message={errorMessage} />}

        </div>

    );
}


export default Checkout;