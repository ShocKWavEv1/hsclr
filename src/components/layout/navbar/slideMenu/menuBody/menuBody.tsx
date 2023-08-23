import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { MenuBodyProps } from "./model";
import { motion } from "framer-motion";
import { blur, translate } from "../../drawer/animation";
import { useRouter } from "next/router";

const MenuBody: React.FC<MenuBodyProps> = ({
  links,
  selectedLink,
  setSelectedLink,
  setOpen,
}) => {
  const router = useRouter();

  const getChars = (word: string) => {
    let chars: any = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.03, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <Box
      w="100%"
      h="auto"
      bg="black"
      p="180px 40px 20px 40px"
      onClick={(e: any) => e.stopPropagation()}
    >
      <Box className="nav-grid">
        <SimpleGrid w="100%" h="100%" columns={[1, 1, 2, 3]} spacing="40px">
          {links.map((item: any, index: number) => {
            return (
              <Box
                key={item.label}
                display="flex"
                flexDirection="row"
                cursor="pointer"
                onClick={() => {
                  setOpen();
                  router.push(item.path);
                }}
              >
                <Text as="span" variant="MDMEDIUM" color="egg.400">
                  <motion.p
                    onMouseOver={() => {
                      setSelectedLink({ isActive: true, index });
                    }}
                    onMouseLeave={() => {
                      setSelectedLink({ isActive: false, index });
                    }}
                    variants={blur}
                    animate={
                      selectedLink.isActive && selectedLink.index != index
                        ? "open"
                        : "closed"
                    }
                    className="nav-char-text"
                    style={{
                      width: "auto",
                      display: "flex",
                      flexDirection: "row",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      w="auto"
                      display="flex"
                      alignItems="flex-end"
                      justifyContent="center"
                    >
                      <Text
                        variant="SMREGULAR"
                        color="egg.400"
                        mb="22px"
                        mr="10px"
                      >
                        {`[ ${index + 1} ]`}
                      </Text>
                    </Box>
                    {getChars(item.label)}
                  </motion.p>
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuBody;
