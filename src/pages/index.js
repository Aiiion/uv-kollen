import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { SunIcon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import CityAutofill from "@/components/CityAutofill.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Dagens UV-Index i din stad | UV-Kollen"
        description="Med UV-Kollen ser du ett detaljerat UV-index för alla svenska städer i realtid. Det är helt gratis, för alltid."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "uv-index, uv just nu, uv-index stockholm, strålsäkerhet, solkräm, hur varmt ska det vara, sommar",
          },
        ]}
      />
      <main>
        <Box
          width="100%"
          bg={`linear-gradient(45deg,${useColorModeValue(
            "#fceabb",
            "#7e4411"
          )},${useColorModeValue("#f8b500", "#9a7300")})`}
          position="relative"
          style={{ height: "calc(100vh + 96px)" }}
        >
          <Box
            zIndex={2}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Box maxWidth={800} mx={[4, 4, 6]}>
              <Box display="flex" justifyContent="center">
                <Box maxWidth={520}>
                  <Heading
                    as="h2"
                    fontSize={["5xl", "5xl", "6xl"]}
                    letterSpacing="-.03em"
                    textAlign="center"
                  >
                    Vad är UV-index
                    <br />
                    just nu?
                  </Heading>
                  <Text fontSize="xl" mt={6} textAlign="center">
                    Skriv in en plats nedan så tar UV-kollen redan på UV-indexet
                    på den platsen just nu.
                  </Text>
                  <Box mt={6}>
                    <HomeForm />
                  </Box>
                  <Box>
                    <Text textAlign="center" fontSize="sm">
                      Data framtagen i realtid för över 1900 svenska städer.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box position="absolute" bottom={0} width="100%">
            <svg
              width="100%"
              height="96px"
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              fill={useColorModeValue("white", "#1a202c")}
            >
              <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z" />
            </svg>
          </Box>
        </Box>
        <Box px={6} py={20} display="flex" justifyContent="center">
          <Box maxWidth={900} width="100%">
            <section>
              <Heading as="h2" mb={6} id="hur-beraknas-uv">
                Hur beräknas ett UV-index?
              </Heading>
              <Text fontSize="lg" lineHeight="1.8">
                Ultraviolett index, eller <i>UV-index</i> som vi känner till
                det, beräknas utifrån flera faktorer. De viktigaste faktorerna
                är solens höjdvinkel, ozonskiktets tjocklek och mängden
                molntäcke. Ju högre solens elevationsvinkel är, desto mer
                direkta är solens strålar. Detta innebär att mer UV-strålning
                når jordytan. Ozonskiktets tjocklek spelar också en roll för hur
                mycket UV-strålning som når jordytan. Ju tunnare ozonskiktet är,
                desto mer UV-strålning når jordytan. Slutligen påverkar också
                mängden molntäcke mängden UV-strålning som når jordytan. Moln
                kan blockera eller reflektera UV-strålning, vilket kan minska
                den mängd som når jordytan.
              </Text>
              <Text fontSize="lg" mt={4} lineHeight="1.8">
                För att beräkna UV-indexet kombineras dessa faktorer och mäts på
                en skala från 0 till 11+. Ju högre index, desto större är risken
                för hudskador från UV-strålning. Det är viktigt att skydda sig
                mot solens skadliga strålar genom att bära skyddande kläder,
                använda solkräm och söka skugga under de timmar då
                UV-strålningen är som högst.
              </Text>
            </section>
            <section>
              <Heading as="h2" mb={6} mt={20} id="hur-fungerar-skalan">
                Hur fungerar skalan?
              </Heading>
              <Text fontSize="lg" lineHeight="1.8">
                UV-skalan är utvecklad av Världshälsoorganisationen (WHO) och
                har blivit erkänd av hälsoorganisationer världen över. Den är
                uppdelad i 5 riskkategorier, där varje kategori har en
                motsvarande färg:
              </Text>
              <List spacing={3} fontSize="lg" mt={3}>
                <ListItem>
                  <ListIcon as={SunIcon} color="green.500" />
                  Låg <b>(0-2)</b>: Grön
                </ListItem>
                <ListItem>
                  <ListIcon as={SunIcon} color="yellow.500" />
                  Måttlig <b>(3-5)</b>: Gul
                </ListItem>
                <ListItem>
                  <ListIcon as={SunIcon} color="orange.500" />
                  Hög <b>(6-7)</b>: Orange
                </ListItem>
                <ListItem>
                  <ListIcon as={SunIcon} color="red.500" />
                  Mycket hög <b>(8-10)</b>: Röd
                </ListItem>
                <ListItem>
                  <ListIcon as={SunIcon} color="purple.500" />
                  Extremt <b>(11+)</b>: Violett
                </ListItem>
              </List>
              <Text fontSize="lg" mt={4} lineHeight="1.8">
                UV-index skalan är linjär, vilket innebär att varje ökning av
                indexvärdet motsvarar en ökning av UV-strålningen med cirka 25
                %. Exempelvis motsvarar ett indexvärde på 6 en UV-strålningsnivå
                som är 25 % högre än en nivå på 5. Ett indexvärde på 8 motsvarar
                en UV-strålningsnivå som är 50 % högre än en nivå på 5. Det
                högsta möjliga indexvärdet är 11+, vilket motsvarar en
                UV-strålningsnivå som är 100 % högre än en nivå på 5. Det är
                viktigt att notera att UV-indexskalan inte är ett direkt mått på
                UV-strålning, utan snarare ett relativt mått på risken för
                hudskador från UV-strålning.
              </Text>
            </section>
            <section>
              <Heading as="h2" mb={6} mt={20} id="uv-i-sverige">
                UV-index i Sverige
              </Heading>
              <Text fontSize="lg" lineHeight="1.8">
                I Sverige har vi normalt sett ett UV-index mellan 4-8 på
                sommaren, och upp till 2 under vintern.
              </Text>
            </section>
          </Box>
        </Box>
        <TypeForm
          id="MruPDpam"
          customIcon={
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" viewBox="0 0 16 16"><path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/></svg>'
          }
          notificationDays={7}
          buttonColor="white"
        />
      </main>
      <Footer />
    </>
  );
}

const HomeForm = () => {
  const router = useRouter();
  const [cityPath, setCityPath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    if (cityPath !== "") {
      setIsLoading(true);
      router.push(`/stad/${encodeURIComponent(cityPath)}`);
    }
  }, [cityPath]);

  return (
    <form ref={formRef} noValidate onSubmit={(e) => e.preventDefault()}>
      <Box display={["block", "flex"]} alignItems="center">
        <CityAutofill setCityPath={setCityPath} formRef={formRef} />
        <Button
          size="lg"
          mx={[0, 2]}
          my={2}
          py={8}
          border="1px solid"
          borderColor={useColorModeValue("black", "white")}
          flexShrink={2}
          bg={useColorModeValue("black", "white")}
          width="100%"
          color={useColorModeValue("white", "black")}
          _hover={{ bg: useColorModeValue("gray.900", "gray.100") }}
          type="submit"
          isLoading={isLoading}
        >
          Beräkna
        </Button>
      </Box>
    </form>
  );
};

const TypeForm = dynamic(
  () => import("@typeform/embed-react").then((mod) => mod.Popover),
  {
    ssr: false,
  }
);
