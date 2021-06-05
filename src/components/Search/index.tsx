import React, { useState } from "react";
import Logo from "../../assets/Logo_ML.png";
import IconSearch from "../../assets/ic_Search.png";
import { useHistory } from "react-router-dom";
import { APP_ROUTE_PATHS } from "constants/routes";
import { parse } from 'query-string';

const SearchComponent: React.FC = () => {
  const params = parse(window.location.search);
  const [inputValue, setInputValue] = useState<string>(params.search?.toString() || '');
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(inputValue) {
      history.push(`${APP_ROUTE_PATHS.ITEMS}?search=${inputValue}`);
    }
  };

  const handleInputOnChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setInputValue(value);

  return (
    <div className="main-search-wrapper">
      <a href={APP_ROUTE_PATHS.HOME} className="content-logo">
        <img src={Logo} width="53" alt="Logo" />
      </a>
      <form className="content-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          onChange={handleInputOnChange}
          value={inputValue}
        />
        <button type="submit" className="icon-search">
          <img src={IconSearch} width="18" alt="Icon Search" />
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
