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
            {
                datas.map(data => <FriendsList key={data.id} data={data} />)
            }
            
        </div>
    );
};

export default HomePage;