import React, { useEffect } from 'react'
import InputField from '../shared/InputField'
import { useForm } from 'react-hook-form';
import { CgPill } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import Spinners from '../shared/Spinners';
import toast from 'react-hot-toast';
import { addUpdateUserDose } from '../../store/actions/index.js';

const AddDoseForm = ({ dose, setOpenDoseModal }) => {
    const dispatch = useDispatch();
    const { btnLoader } = useSelector((state) => state.errors);
    const {
            register,
            handleSubmit,
            reset,
            setValue,
            formState: {errors},
        } = useForm({
            mode: "onTouched",
        });

        const onSaveDoseHandler = async (data) => {
            dispatch(addUpdateUserDose(
                data,
                toast,
                dose?.doseId,
                setOpenDoseModal
            ));
        };


        useEffect(() => {
            if (dose?.doseId) {
                setValue("medicationName", dose?.medicationName);
                setValue("timeFrequency", dose?.timeFrequency);
                setValue("days", dose?.days);
                setValue("time", dose?.time);
                setValue("period", dose?.period);
            }
        }, [dose]);

  return (
    <div className="">
            <form
                onSubmit={handleSubmit(onSaveDoseHandler)}
                className="">
                    <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
                        <CgPill className="mr-2 text-2xl"/>
                        {!dose?.doseId ? 
                        "Add dose" :
                        "Update dose"
                        }
                        
                    </div>
            <div className="flex flex-col gap-4">
            <InputField
                    label="Medication Name"
                    required
                    id="medicationName"
                    type="text"
                    message="*Medication Name is required"
                    placeholder="Enter Medication Name"
                    register={register}
                    errors={errors}
                    />

                <InputField
                    label="Time Frequency"
                    required
                    id="timeFrequency"
                    type="text"
                    message="*Time Frequency is required"
                    placeholder="Enter Time Frequency"
                    register={register}
                    errors={errors}
                    />

                <InputField
                    label="Days"
                    id="days"
                    type="text"
                    message="*Days is required"
                    placeholder="Enter Days"
                    register={register}
                    errors={errors}
                    />

                <InputField
                    label="Time"
                    required
                    id="time"
                    type="text"
                    message="*Time is required"
                    placeholder="Enter Time"
                    register={register}
                    errors={errors}
                    />

                <InputField
                    label="Period"
                    required
                    id="period"
                    type="text"
                    message="*Period is required"
                    placeholder="Enter Period in time frequency entered"
                    register={register}
                    errors={errors}
                    />    
            </div>

            <button
                disabled={btnLoader}
                className="text-white bg-customBlue px-4 py-2 rounded-md mt-4"
                type="submit">
                {btnLoader ? (
                    <>
                    <Spinners /> Loading...
                    </>
                ) : (
                    <>Save</>
                )}
            </button>
            </form>
        </div>
  )
}

export default AddDoseForm