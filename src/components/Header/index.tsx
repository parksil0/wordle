import { useEffect, useState } from 'react';

import MenuIcon from '../../assets/menu.svg';
import SearchIcon from '../../assets/search.svg';
import SettingsIcon from '../../assets/settings.svg';
import StatisticsIcon from '../../assets/statistics.svg';
import { ALERT_MESSAGE } from '../../constants';
import AlertPortal, { Alert } from '../Alert';
import Button from '../Button';
import Icon from '../Icon';
import { Header, IconContainer, Title } from './index.styles';

const Index = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  const onClickIcon = () => {
    setIsShowAlert(true);
    setMessage(ALERT_MESSAGE.IN_READY);
  };

  useEffect(() => {
    if (isShowAlert) setTimeout(() => setIsShowAlert(false), 1950);
  }, [isShowAlert]);

  return (
    <>
      <Header>
        <IconContainer>
          <Button onClick={onClickIcon}>
            <Icon href={`${MenuIcon}#menu`} width="20px" height="20px" title="menu" />
          </Button>
          <Button onClick={onClickIcon}>
            <Icon
              href={`${SearchIcon}#search`}
              width="24px"
              height="24px"
              title="search"
            />
          </Button>
        </IconContainer>
        <Title>WORDLE</Title>
        <IconContainer>
          <Button onClick={onClickIcon}>
            <Icon
              href={`${StatisticsIcon}#statistics`}
              width="24px"
              height="24px"
              title="statistics"
            />
          </Button>
          <Button onClick={onClickIcon}>
            <Icon
              href={`${SettingsIcon}#settings`}
              width="24px"
              height="24px"
              title="settings"
            />
          </Button>
        </IconContainer>
      </Header>
      {isShowAlert && (
        <AlertPortal>
          <Alert message={message} />
        </AlertPortal>
      )}
    </>
  );
};

export default Index;
