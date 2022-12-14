import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CartIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { AiTwotoneShopping } from "react-icons/ai";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box marginTop={"2px"} justifyContent="center" padding="30px">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to="/">
              <Image
                //   borderRadius="full"
                boxSize="50px"
                width="100px"
                src="https://i.ibb.co/cbkfwXV/Fitness-Center-Logo.png"
                alt="LOGO"
              />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
            <Stack
              marginLeft={"50px"}
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <Search2Icon />
            </Stack>
            <Stack
              marginLeft={"50px"}
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
              fontSize="20px"
            >
              <Link to="/cart">
                <AiTwotoneShopping />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                // href={navItem.href ?? "#"}
                to={navItem.li}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "underl",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            <Link to={href}> {label}</Link>
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={10}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        // href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link to={child.href} key={child.label} py={2}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

const NAV_ITEMS = [
  {
    label: "WORKOUT",
    li: "/workout",
    children: [
      {
        label: "Workout Videos",
        subLabel: "Watch Video ",
        href: "/workout",
      },
      {
        label: "Custum Workout",
        subLabel: "Add Custom ",
        href: "/workout",
      },
    ],
  },
  {
    label: "PROGRAMS",
    li: "/programs",
    children: [
      {
        label: "Workout Program",
        subLabel: "Take your Program",
        href: "/programs",
      },
      {
        label: "Meal Planes",
        subLabel: "Check Your Plan Here",
        href: "/programs",
      },
    ],
  },
  {
    label: "HELTHY LIVING",
    li: "/helhty_living",
    children: [
      {
        label: "Health ",
        subLabel: "Health Club",
        href: "/helhty_living",
      },
      {
        label: "Nutrition",
        subLabel: "Nutrional Plan",
        href: "/helhty_living",
      },
    ],
  },
  {
    label: "COMUNITY",
  },
  {
    label: "ABOUT",
  },
  {
    label: "STORE",
  },
  {
    label: "MEMBERSHIP",
  },
  {
    label: "SIGNUP",
    li: "/signup",
    children: [
      {
        label: "JOIN",
        subLabel: "join our Comunity",
        href: "/signup",
      },
      {
        label: "Sign Up",
        subLabel: "Sign up here",
        href: "/signup",
      },
    ],
  },
  {
    label: "CONTACT",
  },
];
