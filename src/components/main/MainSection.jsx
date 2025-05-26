import React, { useState } from 'react';
import UserInput from '../user/UserInput';
import BankAccount from '../bankAcount/BankAccount';
import { useSelector, useDispatch } from 'react-redux';


const MainSection = () => {
    const userInfo = useSelector((state) => state.card.userInfo);
console.log(userInfo)
  return (
    <div>
      {!userInfo?.name ?(
        <UserInput  />
      ) : (
        <BankAccount userInfo={userInfo} />
      )}
    </div>
  );
};

export default MainSection;
