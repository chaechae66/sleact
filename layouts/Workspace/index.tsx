import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import gravatar from 'gravatar';
import {
  Channels,
  Chats,
  Header,
  MenuScroll,
  ProfileImg,
  RightMenu,
  WorkspaceName,
  WorkspaceWrapper,
  Workspaces,
} from './styles';

type Props = {
  children: React.ReactNode;
};

const Workspace: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { data, error, isValidating, mutate } = useSWR('http://localhost:3095/api/users');
  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);

  console.log('data2', data);

  useEffect(() => {
    if (!data) {
      return navigate('/login');
    }
  }, [data]);

  return (
    <div>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(data.email, { s: '28px', d: 'retro' })} alt={data.email} />
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll>Menu scroll</MenuScroll>
        </Channels>
        <Chats>Chats</Chats>
      </WorkspaceWrapper>
      {children}
    </div>
  );
};

export default Workspace;
