import { useToast } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  state : "warning" | "success" | "error" | "loading";
}

export default function Toast({ title, description, state }: Props) {

  const toast = useToast();
  toast({
    title: title,
    description: description,
    status: state,
    duration: 2000,
    isClosable: true,
  });
}
