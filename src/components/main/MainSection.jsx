import React, { useState } from 'react';
import UserInput from '../user/UserInput';
import BankAccount from '../bankAcount/BankAccount';

const MainSection = () => {
  const [userInfo, setUserInfo] = useState("");

  return (
    <div>
      {userInfo === "" ? (
        <UserInput setUserInfo={setUserInfo} />
      ) : (
        <BankAccount userInfo={userInfo} />
      )}
    </div>
  );
};

export default MainSection;
