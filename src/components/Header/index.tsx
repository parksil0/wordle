import MenuIcon from '../../assets/menu.svg';
import SearchIcon from '../../assets/search.svg';
import SettingsIcon from '../../assets/settings.svg';
import StatisticsIcon from '../../assets/statistics.svg';
import Button from '../Button';
import { Header, IconContainer, Title } from './index.styles';

const Index = () => {
  return (
    <Header>
      <IconContainer>
        <Button>
          <img src={MenuIcon} width="20px" alt="menu" />
        </Button>
        <Button>
          <img src={SearchIcon} alt="search" />
        </Button>
      </IconContainer>
      <Title>WORDLE</Title>
      <IconContainer>
        <Button>
          <img src={StatisticsIcon} alt="statistics" />
        </Button>
        <Button>
          <img src={SettingsIcon} alt="settings" />
        </Button>
      </IconContainer>
    </Header>
  );
};

export default Index;
