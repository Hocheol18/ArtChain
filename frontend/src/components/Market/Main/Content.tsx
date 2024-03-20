import { SimpleGrid } from "@chakra-ui/react";
import ContentEnd from "./ContentEnd";
import ContentShow from "./ContentShow";

export default function Content() {
  return (
    <>
      <SimpleGrid
        spacing="10"
        p="6"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        <ContentShow />
        <ContentEnd />
      </SimpleGrid>
    </>
  );
}
