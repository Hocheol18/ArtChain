import React, { useRef, useState } from "react";
import { Box, Button, Input, Flex } from "@chakra-ui/react";

export default function FileUploadButton() {
  const [fileName, setFileName] = useState("");
  const inputEl = useRef(null)

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const triggerFileInput = () => {
    inputEl.current.click();
  };

  return (
    <>
      <Flex>
        <Box as="label" htmlFor="file">
          {fileName ? (
            <Button color="blue.400" border={"1px"} borderRadius="12px" onClick={triggerFileInput}>
              {fileName}
            </Button>
          ) : (
            <Button color="blue.400" border={"1px"} borderRadius="12px" onClick={triggerFileInput}>
              파일 등록
            </Button>
          )}
        </Box>
        <Input
          type="file"
          id="file"
          onChange={handleFileChange}
          display={"none"}
          ref={inputEl}
        />
      </Flex>
    </>
  );
}
