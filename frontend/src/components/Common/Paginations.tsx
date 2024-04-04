import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pagenation() {
  const [totalPage, setTotalPage] = useState(3);
  const pages = Array.from({ length: totalPage }, (_, i) => i);

  return (
    <Flex direction={"row"} mt={"1rem"}>
      <Breadcrumb separator={""} ml={"1rem"} mr={"1rem"}>
        {pages.map((i) => (
          <BreadcrumbItem ml={"0.5rem"} mr={"0.5rem"} key={i}>
            <BreadcrumbLink as={Link} to={`../market/${i + 1}`}>
              {i + 1}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Flex>
  );
}
