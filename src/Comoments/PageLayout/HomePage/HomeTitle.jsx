import React from 'react';

const HomeTitle = () => {
    return (
        <div>
            <section className="text-center py-12">
                <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
                <p className="text-gray-500 mt-2">Your personal board of meaningful connections</p>
                <button className="btn text-white bg-[#244D3F] mt-4">+ Add Friend</button>
            </section>
        </div>
    );
};

export default HomeTitle;