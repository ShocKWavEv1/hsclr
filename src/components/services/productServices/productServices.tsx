import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ProductServicesProps } from "./model";

const ProductServices: React.FC<ProductServicesProps> = ({ products }) => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Box w="80%" h="auto" mt="150px">
        <SimpleGrid w="100%" h="auto" columns={[1, 1, 3, 3]} spacing="30px">
          {products.map((item: any, i: number) => {
            return (
              <Box
                w="100%"
                h="80vh"
                display="flex"
                flexDirection="column"
                borderLeft="1px solid black"
                p="10px 20px"
                key={item.title}
              >
                <Box
                  w="100%"
                  h="auto"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Heading variant="H1BOLD">{item.title}</Heading>
                  <Text
                    variant="XSREGULAR"
                    color="black"
                    opacity={0.45}
                    textTransform="uppercase"
                  >
                    {item.subtitle}
                  </Text>
                </Box>
                <Box
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-end"
                  flexDirection="column"
                >
                  {item.bullets.map((item: any, j: number) => {
                    return (
                      <Text
                        variant="LGREGULAR"
                        color="black"
                        textTransform="uppercase"
                        key={item}
                      >
                        {item}
                      </Text>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductServices;
