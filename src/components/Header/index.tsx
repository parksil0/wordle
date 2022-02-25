import MenuIcon from '../../assets/menu.svg';
import SearchIcon from '../../assets/search.svg';
import SettingsIcon from '../../assets/settings.svg';
import StatisticsIcon from '../../assets/statistics.svg';
import Button from '../Button';
import Icon from '../Icon';
import { Header, IconContainer, Title } from './index.styles';

const Index = () => {
  return (
    <Header>
      <IconContainer>
        <Button>
          <Icon href={`${MenuIcon}#menu`} width="20px" height="20px" />
        </Button>
        <Button>
          <Icon href={`${SearchIcon}#search`} width="24px" height="24px" />
        </Button>
      </IconContainer>
      <Title>WORDLE</Title>
      <IconContainer>
        <Button>
          <Icon href={`${StatisticsIcon}#statistics`} width="24px" height="24px" />
        </Button>
        <Button>
          <Icon href={`${SettingsIcon}#settings`} width="24px" height="24px" />
        </Button>
      </IconContainer>
    </Header>
  );
};

export default Index;
