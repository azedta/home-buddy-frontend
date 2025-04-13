import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReminderMethod, createUserTreatment } from '../../store/actions';

const ReminderMethod = () => {
    const dispatch = useDispatch();
    const { reminderMethod } = useSelector((state) => state.reminder || {});
    // const { treatment, treatmentId } = useSelector((state) => state.treatments);
    // const { isLoading, errorMessage } = useSelector((state) => state.errors);

    // useEffect(() => {
    //     if (treatment.length > 0 && !treatmentId && !errorMessage) {
    //         const sendTreatmentItems = treatment.map((item) => {
    //             return {
    //                 medicationId: item.medicationId,
    //                 quantity: item.quantity,
    //             };
    //         });
            
    //         dispatch(createUserTreatment(sendTreatmentItems));
    //     }
    // }, [dispatch, treatmentId]);

    const reminderMethodHandler = (method) => {
        dispatch(addReminderMethod(method));
    }
  return (
    <div className='max-w-md mx-auto p-5 bg-white shadow-md rounded-lg mt-16 border'>
        <h1 className='text-2xl font-semibold mb-4'>Select Reminder Method</h1>
        <FormControl>
            <RadioGroup
                aria-label="reminder method"
                name="reminderMethod"
                value={reminderMethod}
                onChange={(e) => reminderMethodHandler(e.target.value)}
            >
                <FormControlLabel 
                    value="SMS" 
                    control={<Radio color='primary' />} 
                    label="SMS" 
                    className='text-gray-700'/>

                <FormControlLabel 
                    value="Email" 
                    control={<Radio color='primary' />} 
                    label="Email" 
                    className='text-gray-700'/>
            </RadioGroup>
        </FormControl>
    </div>
  )
}

export default ReminderMethod