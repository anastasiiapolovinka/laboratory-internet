import { isMobileOnly } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AText, Box, Container } from "../uikit";
import styles from "./index.module.css";
import { useRef } from "react";
import clsx from "clsx";

const data = [
  {
    img: "./src/images/avatar_1.png",
    name: "Литвинов Николай Иванович",
    city: "Санкт-Петербург",
    text: "Каждый из нас понимает очевидную вещь: перспективное планирование представляет широкие возможности для анализа существующих паттернов поведения.",
  },
  {
    img: "./src/images/avatar_2.png",
    name: "Алишер Алиев",
    city: "Ростов",
    text: "В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
  {
    img: "./src/images/avatar_3.png",
    name: "Игорь Донской",
    city: "Самара",
    text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
  },
  {
    img: "./src/images/avatar_2.png",
    name: "Константинов Михаил Павлович",
    city: "Тверь",
    text: "Каждый из нас понимает очевидную вещь: перспективное планирование представляет широкие возможности для анализа существующих паттернов поведения.",
  },
  {
    img: "./src/images/avatar_1.png",
    name: "Иван Иванов",
    city: "Москва",
    text: "В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
];

const Dot = ({ handleGoTo }) => (
  <div onClick={handleGoTo} className={styles.dot}></div>
);

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={clsx([styles.arrow, className, styles.prevArrow])}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={clsx([styles.arrow, className, styles.nextArrow])}
      onClick={onClick}
    />
  );
};

export const ReviewsSection = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => {
      const handleGoTo = () => sliderRef.current.slickGoTo(i);
      return <Dot handleGoTo={handleGoTo} />;
    },
    dotsClass: styles.dots,
  };
  return (
    <Box className={styles.section}>
      <Container>
        <Box
          align="center"
          justify="center"
          className={styles.wrapper}
          direction="column"
        >
          <AText variant={isMobileOnly ? "headline_4" : "headline_2"}>
            Отзывы
          </AText>
          <Box className={styles.carusele_wrapper}>
            <Slider ref={sliderRef} {...settings}>
              {data.map((d) => (
                <Box
                  key={d.name}
                  className={styles.carusele_item}
                  direction="column"
                >
                  <Box className={styles.item_content} direction="column">
                    <Box className={styles.item_header}>
                      <Box
                        Component="img"
                        className={styles.item_image}
                        src={d.img}
                        alt="avatar"
                      ></Box>
                      <Box className={styles.item_info} direction="column">
                        <AText variant="headline_6">{d.name}</AText>
                        <AText className={styles.item_city} variant="body_12">
                          {d.city}
                        </AText>
                      </Box>
                    </Box>
                    <AText variant="body_14" className={styles.item_body}>
                      {d.text}
                    </AText>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
