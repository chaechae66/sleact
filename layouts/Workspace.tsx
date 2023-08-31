import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

type Props = {
  children: React.ReactNode;
};

const Workspace: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher, {
    dedupingInterval: 100000,
  });
  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate();
      });
  }, []);

  useEffect(() => {
    if (!data) {
      return navigate('/login');
    }
  }, [data]);

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>;{children}
    </div>
  );
};

export default Workspace;
