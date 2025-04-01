import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Divider } from '@mui/material';
import Status from './Status';
import { MdClose, MdDone } from 'react-icons/md';
import { useState } from 'react'

function MedicationViewModal({ open, setOpen, medication, isAvailable }) {

    const { medicationId, medicationName, medicationForm, medicationStrength, medicationDescription, quantity } = medication;
    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <>

            <Dialog open={open} as="div" className="relative z-10" onClose={close}>
                <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[620px] md:min-w-[620px] w-full"
                        >
                            <div className='px-6 pt-10 pb-2'>
                                <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4">
                                    {medicationName}
                                </DialogTitle>

                                <div className="space-y-2 text-gray-700 pb-4">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex flex-col" >
                                            <span className="text-gray-700 font-medium">
                                                {Number(medicationStrength)} mg
                                            </span>
                                        </div>


                                        {isAvailable ? (
                                            <Status
                                                text="In Stock"
                                                icon={MdDone}
                                                bg="bg-teal-200"
                                                color="text-teal-900"
                                            />
                                        ) : (
                                            <Status
                                                text="Out-Of-Stock"
                                                icon={MdClose}
                                                bg="bg-rose-200"
                                                color="text-rose-700"
                                            />
                                        )}
                                    </div>

                                    <Divider />

                                    <p>
                                        {medicationDescription}
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 py-4 flex justify-end gap-4">
                                <button
                                    onClick={() => setOpen(false)}
                                    type="button"
                                    className="px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-700 hover:text-slate-800 hover:border-slate-800 rounded-md "
                                >
                                    Close
                                </button>
                            </div>

                        </DialogPanel>


                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default MedicationViewModal;