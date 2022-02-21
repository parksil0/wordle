import MenuIcon from "../../assets/menu.svg";
import SearchIcon from "../../assets/search.svg";
import StatisticsIcon from "../../assets/statistics.svg";
import SettingsIcon from "../../assets/settings.svg";
import { Header, IconContainer, Title } from "./index.styles";
import Button from "../Button";

const Index = () => {
  return (
    <Header>
      <IconContainer>
        <Button>
          <img src={MenuIcon} width="20px" />
        </Button>
        <Button>
          <img src={SearchIcon} />
        </Button>
      </IconContainer>
      <Title>WORDLE</Title>
      <IconContainer>
        <Button>
          <img src={StatisticsIcon} />
        </Button>
        <Button>
          <img src={SettingsIcon} />
        </Button>
      </IconContainer>
    </Header>
  );
};

export default Index;
