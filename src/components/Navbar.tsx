import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div>
      <HStack>
        <Image boxSize="60px" src={logo} />
      </HStack>
    </div>
  );
};

export default Navbar;
