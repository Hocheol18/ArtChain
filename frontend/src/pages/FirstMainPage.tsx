import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function FirstMainPage() {
  const words = ["[스튜디오]지브리전시회", "린킨파크내한공연", "범죄도시4"]; // 변화할 단어 목록
  const title = ["전시", "공연", "영화"];

  const [wordIndex, setWordIndex] = useState<number>(0);
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [currentTitle, setCurrentTitle] = useState<string>("");

  // 위에서 정의한 단어 목록을 이용하여, 0.1초마다 한 글자씩 추가하고, 1초 후 다음 단어로 변경
  useEffect(() => {
    if (letterIndex > words[wordIndex].length) {
      
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setLetterIndex(0);
      }, 2000); // 1초 후 다음 단어로 변경
    } else {
      // 0.1초마다 한 글자씩 추가
      const timer = setTimeout(() => {
        setLetterIndex(letterIndex + 1);
        setCurrentTitle(title[wordIndex]);
        setCurrentWord(words[wordIndex].substring(0, letterIndex));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [letterIndex, wordIndex]);

  return (
    <Box>
      <Text as={"b"}>내 상황에 맞는</Text>
      <Text>
        {currentTitle} {currentWord}
      </Text>
      <Text>가장 확실한 방법</Text>
    </Box>
  );
}
