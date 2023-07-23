import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>msbdjs</MenuItem>
        <MenuItem>msbdjs</MenuItem>
        <MenuItem>msbdjs</MenuItem>
        <MenuItem>msbdjs</MenuItem>
        <MenuItem>msbdjs</MenuItem>
        <MenuItem>msbdjs</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
