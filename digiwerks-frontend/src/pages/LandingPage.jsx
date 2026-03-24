import {
  Link,
  HStack
} from "@chakra-ui/react";

export default function LandingPage () {
    return (
        <HStack justify="center" spacing={20} mt={4}>
            <Link 
              href="/artist/new"
              fontSize="md"
              color="brand.pink"
              _hover={{ color: "brand.blue" }}>
                Signup
            </Link>
            <Link 
              href="/artist/login"
              fontSize="md"
              color="brand.pink"
              _hover={{ color: "brand.blue" }}>
                Login
            </Link>
        </HStack>
    )
}