import { Flex, Text, VStack, Box, Heading, HStack, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_user_profile_data } from "../api/endpoints";
import { SERVER_URL } from "../constants/constants";

const UserProfile = () => {

    const get_username_from_url = () => {
        const url_split = window.location.pathname.split('/');
        return url_split[url_split.length-1]
    }

    const [username, setUsername] = useState(get_username_from_url())

    useEffect(() => {
        setUsername(get_username_from_url())
    }, [])
    return (
        <Flex w="100%" justifyContent="center">
            <VStack w="75%">
                <Box w="100%">
                    <UserData username={username} />
                </Box>
            </VStack>
        </Flex>
    )
}

const UserData = ({username}) => {

    const [loading, setLoading] = useState(true)
    const [bio, setBio] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [followers, setFollowers] = useState(0)
    const [following, setFollowing] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await get_user_profile_data(username);
            console.log(data)

            setBio(data.bio)
            setProfileImage(data.profile_picture)
            setFollowers(data.follower_count)
            setFollowing(data.following_count)
            } catch (e){
                console.log(e)
            } finally{
                setLoading(false)
            }
        }

        fetchData();
    },)
    return (
        <VStack w="100%" alignItems="start" mt="20px" gap="40px">
            <Heading fontSize="22px">{username}</Heading>
            <HStack gap="20px">
                <Box boxSize="125px" border="2px solid gray" borderRadius="full" overflow="hidden">
                    <Image src={`${SERVER_URL}${profileImage}`} objectFit="cover" boxSize="100%" />
                </Box>
                <VStack gap="20px" fontSize="16px">
                    <HStack>
                        <VStack>
                            <Text>Followers</Text>
                            <Text>{followers}</Text>
                        </VStack>

                        <VStack>
                            <Text>Following</Text>
                            <Text>{following}</Text>
                        </VStack>

                    </HStack>
                    <Button w="100%">Edit Profile</Button>
                </VStack>
            </HStack>
            <Text fontSize="18px">{bio}</Text>
        </VStack>
    )
}

export default UserProfile