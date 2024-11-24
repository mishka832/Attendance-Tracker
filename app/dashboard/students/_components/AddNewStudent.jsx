"use client"
import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';  // Plus Icon
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'

function AddNewStudent() {
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("FormData", data);
        // You can handle the form submission here
        setOpen(false); // Close the dialog after form submission
    };

    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                className="text-slate-400 bg-slate-800 border-2 border-slate-800 hover:bg-slate-700 hover:text-yellow-400 active:bg-slate-600 active:text-yellow-400 px-6 py-4 w-[350px] rounded-md shadow-lg flex items-center space-x-3 transition duration-300 transform hover:scale-105"
            >
                <span className="text-2xl">+ Add New Student</span>
            </Button>

            {/* Dialog for Add New Student */}
            <Dialog open={open}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Student</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Name Field */}
                                <div className="py-3">
                                    <label>Name</label>
                                    <Input
                                        placeholder="Ex. ABCD RAHEJA"
                                        {...register('name', { required: "Name is required" })}
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                </div>

                                {/* Grade Field */}
                                <div className="flex flex-col py-3">
                                    <label>Grade</label>
                                    <select
                                        className='p-3 border rounded-lg'
                                        {...register('grade', { required: "Grade is required" })}
                                    >
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>
                                        <option value="9th">9th</option>
                                        <option value="10th">10th</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                    </select>
                                    {errors.grade && <span className="text-red-500 text-sm">{errors.grade.message}</span>}
                                </div>

                                {/* Email Field */}
                                <div className="py-3">
                                    <label>Email Address</label>
                                    <Input
                                        placeholder="Ex. abcd@gmail.com"
                                        {...register('email', { required: "Email is required" })}
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>

                                {/* Address Field */}
                                <div className="py-3">
                                    <label>Address</label>
                                    <Input
                                        placeholder="Ex. Jungle street"
                                        {...register('address')}
                                    />
                                </div>

                                {/* Phone Number Field */}
                                <div className="py-3">
                                    <label>Phone Number</label>
                                    <Input
                                        placeholder="Ex. 9871001919"
                                        {...register('phone')}
                                    />
                                </div>

                                {/* Centered Buttons */}
                                <div className="flex justify-center space-x-4 pt-4">
                                    <Button
                                        onClick={() => setOpen(false)}
                                        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewStudent;



