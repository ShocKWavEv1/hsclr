import { useEffect } from "react";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";
import { customCursor } from "@/constants/constants";
const Cursor = () => {
  const router = useRouter();

  useEffect(() => {
    customCursor();
  }, [router]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <Text variant="MDMEDIUM" className="cursor-text" color="black">
        View
      </Text>
    </div>
  );
};

export default Cursor;
