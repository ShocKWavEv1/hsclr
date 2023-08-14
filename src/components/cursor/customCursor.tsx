import { useEffect } from "react";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
import { customCursor } from "@/constants/constants";
const Cursor = () => {
  const router = useRouter();

  useEffect(() => {
    customCursor();
  }, [router]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <Heading variant="H9HATTONREGULAR" className="cursor-text" color="black">
        View
      </Heading>
    </div>
  );
};

export default Cursor;
