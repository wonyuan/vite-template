import { Flex, Box } from '@mantine/core';
import Profile from "@templates/Profile";
import { NavbarMinimal } from "@molecules/Navbar";

export function Home() {
  return (
    <>
      <Flex direction="row" sx={{ paddingRight: 0 }}>
        <NavbarMinimal/>
        <Flex direction="column" sx={{ width:"100%", marginLeft:"80px" }}>
            <Profile/>
        </Flex>
      </Flex>
    </>
  );
}
