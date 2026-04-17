import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-success text-white text-center py-10">
                <h2 className="text-2xl font-bold">KeenKeeper</h2>
                <p className="text-sm mt-2">
                    Build and nurture meaningful relationships
                </p>

                <div className="flex justify-center gap-4 mt-4">
                    <button className="btn btn-circle btn-sm">F</button>
                    <button className="btn btn-circle btn-sm">L</button>
                    <button className="btn btn-circle btn-sm">X</button>
                </div>

                <p className="text-xs mt-4">© 2026 KeenKeeper</p>
            </div>
        </div>
    );
};

export default Footer;