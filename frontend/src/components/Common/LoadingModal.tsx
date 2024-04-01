import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import PuzzleIcon from "../../assets/puzzle.svg";
import Spinner from "../../assets/spinner.gif";

interface Props {
  headerText: string; //맨 위에 쓰이는 텍스트 헤더
  successNum: number; //숫자
  successText: string; //코인인지 조각인지..

  isSuccess: boolean;
  isOpen: boolean;
  onClose: () => void;
  url: string;

  handleGoWhere: () => void; //확인 눌렀을 때 어디로 갈지 함수
}

export const LoadingModal = ({
  headerText,
  successNum,
  successText,
  isSuccess,
  isOpen,
  onClose,
  url,
  handleGoWhere,
}: Props) => {
  return (
    <>
      {/* 모달 */}
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
      >
        <ModalOverlay />
        <ModalContent bg={"white"} w="60%">
          {isSuccess ? (
            <>
              <ModalBody pb={6}>
                <Center display={"flex"} flexDirection={"column"}>
                  <Center py={5} fontWeight={"bold"} fontSize={"20"}>
                    <CheckCircleIcon mr={3} color={"blue.300"} />
                    {headerText}
                  </Center>

                  <Center mb={7} mt={5} flexDir={"column"}>
                    <Center pb={3} fontSize={"18"} fontWeight={"bold"}>
                      <Image
                        filter={
                          "invert(19%) sepia(100%) saturate(1891%) hue-rotate(201deg) brightness(90%) contrast(99%)"
                        }
                        ml={1}
                        w={6}
                        src={PuzzleIcon}
                      />
                      {successNum} {successText}
                    </Center>
                    <Link
                      href={url}
                      textColor={"blue.300"}
                      onClick={handleGoWhere}
                    >
                      거래 상세 링크
                    </Link>
                  </Center>

                  <Center my={3}>
                    <Button
                      variant="unstyled"
                      px={3}
                      backgroundColor="blue.300"
                      color={"white"}
                      onClick={handleGoWhere}
                    >
                      확인
                    </Button>
                  </Center>
                </Center>
              </ModalBody>
            </>
          ) : (
            <>
              {/* <ModalHeader>조각을 만드는 중입니다...</ModalHeader> */}

              <ModalBody pb={6}>
                <Center display={"flex"} flexDirection={"column"}>
                  <Box py={5} fontWeight={"bold"}>
                    {successText}을 만드는 중입니다...
                  </Box>
                  <Image src={Spinner} />
                </Center>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
