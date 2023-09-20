import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";
const Cursor = () => {
  const router = useRouter();

  return (
    <div id="custom-cursor" className="custom-cursor">
      <Text variant="LGREGULAR" className="cursor-text" color="black">
        View
      </Text>
    </div>
  );
};

export default Cursor;
