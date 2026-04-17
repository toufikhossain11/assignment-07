import React from 'react';

const FriendsCount = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
            <div className="card bg-base-100 p-4 text-center shadow">
                <h2 className="text-2xl font-bold">10</h2>
                <p>Total Friends</p>
            </div>

            <div className="card bg-base-100 p-4 text-center shadow">
                <h2 className="text-2xl font-bold">3</h2>
                <p>On Track</p>
            </div>

            <div className="card bg-base-100 p-4 text-center shadow">
                <h2 className="text-2xl font-bold">6</h2>
                <p>Need Attention</p>
            </div>

            <div className="card bg-base-100 p-4 text-center shadow">
                <h2 className="text-2xl font-bold">12</h2>
                <p>Interactions</p>
            </div>
        </div>
    );
};

export default FriendsCount;