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
      <Text variant="SMREGULAR" className="cursor-text" color="licorice.500">
        View
      </Text>
    </div>
  );
};

export default Cursor;
