// import React, { useState } from 'react';

const ProfileDetails = ({detailsData}) => {
    console.log(detailsData)
    
    return (
        <div>
            <div className="flex justify-center px-4 py-10">
                <div className="w-full max-w-5xl grid md:grid-cols-3 gap-6">

                    {/* Left Profile Card */}
                    <div className="card bg-base-100 shadow p-6 text-center">
                        <img
                            src="https://i.pravatar.cc/100?img=5"
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        <h3 className="font-semibold text-lg mt-2">Emma Wilson</h3>

                        <div className="flex justify-center gap-2 mt-2">
                            <span className="badge badge-error">Overdue</span>
                            <span className="badge badge-success">Family</span>
                        </div>

                        <p className="text-sm text-gray-400 mt-3 italic">
                            "Former colleague, great mentor"
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Preferred: email
                        </p>

                        <div className="mt-6 space-y-2">
                            <button className="btn btn-outline btn-sm w-full">
                                Snooze 2 Weeks
                            </button>
                            <button className="btn btn-outline btn-sm w-full">
                                Archive
                            </button>
                            <button className="btn btn-outline btn-error btn-sm w-full">
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="md:col-span-2 space-y-6">

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="card bg-base-100 p-4 text-center shadow">
                                <h2 className="text-2xl font-bold">62</h2>
                                <p className="text-sm text-gray-500">
                                    Days Since Contact
                                </p>
                            </div>

                            <div className="card bg-base-100 p-4 text-center shadow">
                                <h2 className="text-2xl font-bold">30</h2>
                                <p className="text-sm text-gray-500">
                                    Goal (Days)
                                </p>
                            </div>

                            <div className="card bg-base-100 p-4 text-center shadow">
                                <h2 className="text-xl font-bold">Feb 27, 2026</h2>
                                <p className="text-sm text-gray-500">
                                    Next Due
                                </p>
                            </div>
                        </div>

                        {/* Goal Section */}
                        <div className="card bg-base-100 shadow p-5">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">Relationship Goal</h3>
                                <button className="btn btn-xs">Edit</button>
                            </div>
                            <p className="text-gray-500 mt-2">
                                Connect every <span className="font-semibold">30 days</span>
                            </p>
                        </div>

                        {/* Quick Actions */}
                        <div className="card bg-base-100 shadow p-5">
                            <h3 className="font-semibold mb-4">Quick Check-In</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <button className="btn btn-outline flex flex-col h-20">
                                    📞
                                    <span>Call</span>
                                </button>

                                <button className="btn btn-outline flex flex-col h-20">
                                    💬
                                    <span>Text</span>
                                </button>

                                <button className="btn btn-outline flex flex-col h-20">
                                    🎥
                                    <span>Video</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;