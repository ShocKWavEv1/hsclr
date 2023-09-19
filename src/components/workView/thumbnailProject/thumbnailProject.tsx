import { Box, Heading, Text } from "@chakra-ui/react";
import { ThumbnailProjectProps } from "./model";
import { motion } from "framer-motion";
import { useState } from "react";
import { anim } from "./constants";
import Image from "next/image";
import { useRouter } from "next/router";

const ThumbnailProject: React.FC<ThumbnailProjectProps> = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box w={["100%", "100%", "80%", "80%", "80%"]} h="auto" mt="0px">
        <Box
          w="100%"
          h="auto"
          onMouseEnter={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          className="project image-gallery"
          onClick={() => router.push("/projects")}
        >
          <Box w="auto">
            <Text variant="SMREGULAR" color="egg.400" pr="10px">
              {project.number}
            </Text>
          </Box>
          <Heading
            className="thumbnail-text"
            variant={[
              "H9HATTONREGULAR",
              "H7HATTONREGULAR",
              "H5HATTONREGULAR",
              "H5HATTONREGULAR",
              "H6HATTONREGULAR",
            ]}
            color="egg.400"
          >
            {project.title_1}
          </Heading>
          <motion.div
            variants={anim}
            animate={isActive ? "open" : "closed"}
            className="imgContainer"
          >
            <Box w="200px" h="100px">
              <Image
                src="/static/media/thumbnail.jpeg"
                alt="thumbnail"
                sizes="10vw"
                width={150}
                height={150}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </motion.div>
          <Heading
            className="thumbnail-text"
            variant={[
              "H9HATTONREGULAR",
              "H7HATTONREGULAR",
              "H6HATTONREGULAR",
              "H6HATTONREGULAR",
              "H6HATTONREGULAR",
            ]}
            color="egg.400"
          >
            {project.title_2}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default ThumbnailProject;
