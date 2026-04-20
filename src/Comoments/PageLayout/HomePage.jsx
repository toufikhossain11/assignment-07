import React, { use } from 'react';
import HomeTitle from './HomePage/HomeTitle';
import FriendsCount from './HomePage/FriendsCount';
import FriendsList from './HomePage/FriendsList';


const HomePage = ({friendsDatas}) => {
    const datas = use(friendsDatas);
    return (
        <div className='p-11'>
            <HomeTitle></HomeTitle>
            <FriendsCount/>
            <h2 className='font-bold text-2xl py-7 pl-5'>Friend List</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-7 gap-y-5 justify-center mx-auto">
                {
                datas.map(data =><FriendsList key={data.id} data={data}></FriendsList>)
            }
            </div>
            
            
        </div>
    );
};

export default HomePage;