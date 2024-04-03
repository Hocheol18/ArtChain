import { AspectRatio, Box, Flex, Icon, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaRegCircle } from "react-icons/fa";
import mainimage from "../../assets/MainImage.png";
import mo from "../../assets/Mo.jpeg";
import oak from "../../assets/oak.jpeg";
import bum from "../../assets/bum.jpeg";
import { FundingCarousel } from "../../type/invest.interface";
import { Link } from "react-router-dom";

function FaRegCircleActive() {
  return (
    <Icon
      display={"inline-block"}
      backgroundColor={"white"}
      borderRadius={"13px"}
      boxSize={"10px"}
      mr={"0.5rem"}
      as={FaRegCircle}
    />
  );
}

function FaRegCircleNone() {
  return (
    <Icon
      display={"inline-block"}
      backgroundColor={"blue.400"}
      borderRadius={"13px"}
      boxSize={"10px"}
      mr={"0.5rem"}
      as={FaRegCircle}
    />
  );
}

interface Props {
  carouselList: FundingCarousel[];
}

export default function MainCarousel({ carouselList }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);

  // moveBar
  const moveLeft = () => {
    setSlideIndex(slideIndex === 0 ? carouselList.length - 1 : slideIndex - 1);
  };
  const moveRight = () => {
    setSlideIndex(slideIndex === carouselList.length - 1 ? 0 : slideIndex + 1);
  };

  if (slideIndex === carouselList.length) {
    setSlideIndex(0);
  }

  useEffect(() => {
    const totalSlides = carouselList.length;
    const interval = setInterval(() => {
      setSlideIndex((currentIndex) => (currentIndex + 1) % totalSlides);
    }, 20000);

    return () => clearInterval(interval);
  }, [carouselList.length]);

  return (
    <Box overflowX={"hidden"} position={"relative"} h={"30%"}>
      <Flex
        overflowX={"hidden"}
        wrap={"nowrap"}
        style={{
          width: `${100 * carouselList.length}vw`,
          transition: "all 1000ms ease-in-out",
          transitionDuration: "1s",
          transform: `translateX(${
            -1 * ((100 / carouselList.length) * slideIndex)
          }%)`,
        }}
      >
        {carouselList.map((data, index) => (
          <Box key={index} w={"100%"} as={Link} to={`/invest/${data.id}`}>
            <AspectRatio ratio={16 / 9} w={"100%"} h={"100%"}>
              <Image src={data.poster} alt="mainimage" objectFit="cover" />
            </AspectRatio>
          </Box>
        ))}
      </Flex>
      <Box
        color={"white"}
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        left={"5%"}
        zIndex={2}
      >
        <ChevronLeftIcon boxSize={7} onClick={moveLeft} />
      </Box>
      <Box
        color={"white"}
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        right={"5%"}
        zIndex={2}
      >
        <ChevronRightIcon boxSize={7} onClick={moveRight} />
      </Box>
      <Box
        position={"absolute"}
        bottom={"0"}
        color={"white"}
        width={"100%"}
        textAlign={"center"}
        mb={"1rem"}
      >
        {slideIndex === 0 ? <FaRegCircleActive /> : <FaRegCircleNone />}
        {slideIndex === 1 ? <FaRegCircleActive /> : <FaRegCircleNone />}
        {slideIndex === 2 ? <FaRegCircleActive /> : <FaRegCircleNone />}
        {slideIndex === 3 ? <FaRegCircleActive /> : <FaRegCircleNone />}
      </Box>
    </Box>
  );
}
