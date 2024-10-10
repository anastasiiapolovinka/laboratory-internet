import { isDesktop, isMobileOnly, isTablet } from "react-device-detect";
import { AText, Box, Container } from "../uikit";
import styles from "./index.module.css";
import clsx from "clsx";

export const HowWorkSection = () => {
  return (
    <Box className={styles.section}>
      <Container>
        <Box className={styles.wrapper} direction="column">
          <Box className={styles.info} direction="column">
            <AText
              className={styles.title}
              variant={isMobileOnly ? "headline_4" : "headline_2"}
            >
              Как это работает
            </AText>
            <Box
              className={styles.info_items}
              direction={isDesktop ? "row" : "column"}
            >
              <Box
                className={styles.items_box}
                direction={isMobileOnly ? "column" : "row"}
              >
                <Box
                  className={styles.info_item}
                  direction={isDesktop ? "column" : "row"}
                >
                  <img src="./src/images/waiting.png" alt="waiting" />
                  <Box className={styles.content} direction="column">
                    <AText variant="headline_6">
                      Прочитай задание внимательно
                    </AText>
                    <AText className={styles.content_info} variant="body_14">
                      Думаю у тебя не займет это больше двух-трех минут
                    </AText>
                  </Box>
                </Box>
                <Box
                  className={styles.info_item}
                  direction={isDesktop ? "column" : "row"}
                >
                  <img
                    src="./src/images/delivery-truck.png"
                    alt="delivery-truck"
                  />
                  <Box className={styles.content} direction="column">
                    <AText variant="headline_6">Изучи весь макет заранее</AText>
                    <AText className={styles.content_info} variant="body_14">
                      Подумай как это будет работать на разных разрешениях и при
                      скролле
                    </AText>
                  </Box>
                </Box>
              </Box>
              <Box
                className={styles.items_box}
                direction={isMobileOnly ? "column" : "row"}
              >
                <Box
                  className={styles.info_item}
                  direction={isDesktop ? "column" : "row"}
                >
                  <img src="./src/images/secure.png" alt="secure" />
                  <Box className={styles.content} direction="column">
                    <AText variant="headline_6">Сделай хорошо</AText>
                    <AText className={styles.content_info} variant="body_14">
                      Чтобы мы могли тебе доверить подобные задачи в будущем
                    </AText>
                  </Box>
                </Box>
                <Box
                  className={styles.info_item}
                  direction={(isDesktop && "column") || (isMobileOnly && "row")}
                >
                  <img src="./src/images/money-bags.png" alt="monay-bags" />
                  <Box className={styles.content} direction="column">
                    <AText variant="headline_6">Получи предложение</AText>
                    <AText className={styles.content_info} variant="body_14">
                      Ну тут все просто, не я придумал правила, но думаю так и
                      будет
                    </AText>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className={styles.main_content}
            direction={(isDesktop && "row") || (isMobileOnly && "columnRevers")}
          >
            <Box
              className={styles.main_info}
              justify="center"
              direction="column"
            >
              <AText variant={isDesktop ? "headline_3" : "headline_5"}>
                Круто, ты дошел до третьего блока
              </AText>
              <Box
                className={clsx([styles.content_info, styles.content_info_gap])}
                variant="body_16"
                direction="column"
              >
                <AText Component="p">
                  63% опрошенных пользовались кредитами из-за того, что не могли
                  покрыть непредвиденные расходы свыше 15 000 ₽.
                </AText>
                <AText Component="p">
                  Доступ к заработанным деньгам помогает отказаться от кредитов
                  и экономить деньги на процентах и штрафах.
                </AText>
              </Box>
            </Box>
            <img
              src={
                (isDesktop && "./src/images/how_work_bg.png") ||
                (isTablet && "./src/images/how_work_bg_tablet.png") ||
                (isMobileOnly && "./src/images/how_work_bg_mob.png")
              }
              alt="work_bg"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
