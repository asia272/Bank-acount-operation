import React, { useState } from 'react';
import UserInput from '../../components/user/UserInput';
import BankAccount from '../../components/bankAcount/BankAccount';
import { useSelector} from 'react-redux';



const MainSection = () => {
    const userInfo = useSelector((state) => state.card.userInfo);
console.log(userInfo)
  return (
    <div>
      {!userInfo?.name ?(
        <UserInput  />
      ) : (
        <BankAccount />
      )}
    </div>
  );
};

export default MainSection;
