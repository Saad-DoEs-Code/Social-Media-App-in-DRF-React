import { Flex, Text, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {

    const nav = useNavigate();

    const handleNavigation = (route) => {
        nav(`/${route}`);
    }
    return (
        <Flex width="100vw" height="100px" bgColor="blue.600" justifyContent='center' alignItems='center'>
            <HStack w='90%' color='white' justifyContent='space-between'>
                <Text fontSize="28px" fontWeight="bold" >SocialHub</Text>
                <HStack>
                    <Text onClick={(route) => { handleNavigation("Saad") }}><IoPersonOutline size='20px' /></Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default Navbar