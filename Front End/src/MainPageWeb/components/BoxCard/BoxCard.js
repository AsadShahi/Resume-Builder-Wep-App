import React, { useContext, useEffect } from "react";
import "./boxCard.css";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

//for translate
import TranslationContext from "../Locales/TranslationContext";
import { TranslationProvider } from "../Locales/TranslationContext";
import { height } from "@mui/system";
export default function BoxCard() {
  const { translate, changeLanguage } = useContext(TranslationContext);
  useEffect(() => {
    if (swiperRef.current) {
      const mySwiper = swiperRef.current.swiper;
      // check if mySwiper exists before using it
      if (mySwiper) {
      }
    }
  }, []);
  const swiperRef = React.useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    console.log("Next button clicked");
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <TranslationProvider>
      <div className="swiper-container">
        <Swiper
          ref={swiperRef}
          direction="horizontal"
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            568: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="swiper-slide ">
            <Card className="card-2" variant="outlined" sx={{ width: "80%" }}>
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img className="img-swiper" src="/images/Res-11.jpg" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="Like minimal photography"
                  size="sm"
                  variant="solid"
                  color="primary"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <CardContent>
                <Typography level="h2" fontSize="md">
                  <Link href="/HowToWriteResume" overlay underline="none">
                    {translate("HowtoBuildResume")}
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5 }}>
                  <Link href="/HowToWriteResume">
                    {translate("clickHereFor")}
                  </Link>
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    6.3k {translate("views")}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    {translate("hourAgo")}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide ">
            {" "}
            <Card className="card-2" variant="outlined" sx={{ width: "80%" }}>
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img className="img-swiper" src="/images/card-1.jpg" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="Like minimal photography"
                  size="sm"
                  variant="solid"
                  color="primary"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <CardContent>
                <Typography level="h2" fontSize="md">
                  <Link href="/HowToWriteResume" overlay underline="none">
                    {translate("HowtoBuildResume")}
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5 }}>
                  <Link href="/HowToWriteResume">
                    {translate("clickHereFor")}
                  </Link>
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    6.3k {translate("views")}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    {translate("hourAgo")}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide ">
            {" "}
            <Card className="card-2" variant="outlined" sx={{ width: "80%" }}>
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src="/images/npm.png" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="Like minimal photography"
                  size="sm"
                  variant="solid"
                  color="primary"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <CardContent>
                <Typography level="h2" fontSize="md">
                  <Link href="/HowToWriteResume" overlay underline="none">
                    {translate("HowtoBuildResume")}
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5 }}>
                  <Link href="/HowToWriteResume">
                    {translate("clickHereFor")}
                  </Link>
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    2.9k {translate("views")}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    {translate("hourAgo")}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide ">
            {" "}
            <Card className="card-2" variant="outlined" sx={{ width: "80%" }}>
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src="/images/card-3.jpg" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="Like minimal photography"
                  size="sm"
                  variant="solid"
                  color="primary"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <CardContent>
                <Typography level="h2" fontSize="md">
                  <Link href="/HowToWriteResume" overlay underline="none">
                    {translate("HowtoBuildResume")}
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5 }}>
                  <Link href="/HowToWriteResume">
                    {translate("clickHereFor")}
                  </Link>
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    1k {translate("views")}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    {translate("hourAgo")}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide ">
            {" "}
            <Card className="card-2" variant="outlined" sx={{ width: "80%" }}>
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src="/images/npm.png" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="Like minimal photography"
                  size="sm"
                  variant="solid"
                  color="primary"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <CardContent>
                <Typography level="h2" fontSize="md">
                  <Link href="/HowToWriteResume" overlay underline="none">
                    {translate("HowtoBuildResume")}
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5 }}>
                  <Link href="/HowToWriteResume">
                    {translate("clickHereFor")}
                  </Link>
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    10k {translate("views")}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    {translate("hourAgo")}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide ">
            {" "}
            <Card className="card-2" variant="outlined" sx={{ width: "80%" }}>
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src="/images/card-2.jpg" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="Like minimal photography"
                  size="sm"
                  variant="solid"
                  color="primary"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 0,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
              <CardContent>
                <Typography level="h2" fontSize="md">
                  <Link href="/HowToWriteResume" overlay underline="none">
                    {translate("HowtoBuildResume")}
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5 }}>
                  <Link href="/HowToWriteResume">
                    {translate("clickHereFor")}
                  </Link>
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    5k {translate("views")}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body3"
                    sx={{ fontWeight: "md", color: "text.secondary" }}
                  >
                    {translate("hourAgo")}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </SwiperSlide>
        </Swiper>

        <ArrowBackIosNewIcon className="prev-button" onClick={handlePrevClick}>
          Prev
        </ArrowBackIosNewIcon>
        <ArrowForwardIosIcon className="next-button" onClick={handleNextClick}>
          Next
        </ArrowForwardIosIcon>
      </div>
    </TranslationProvider>
  );
}
