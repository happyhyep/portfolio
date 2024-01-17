import { useTranslation } from "react-i18next";
import { ActivityDataInterface } from "src/types/type";

export default function getActivityData() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  const activityData: ActivityDataInterface[] = [
    {
      key: "apple-devloper",
      value: t("activites.apple-developer.title"),
      date: t("activites.apple-developer.date"),
    },
    {
      key: "famppy",
      value: t("activites.famppy.title"),
      date: t("activites.famppy.date"),
    },
    {
      key: "shake",
      value: t("activites.shake.title"),
      date: t("activites.shake.date"),
    },
    {
      key: "shake-khu",
      value: t("activites.shake-khu.title"),
      date: t("activites.shake-khu.date"),
    },
    {
      key: "scaico",
      value: t("activites.scaico.title"),
      date: t("activites.scaico.date"),
    },
    {
      key: "2023-council",
      value: t("activites.2023-council.title"),
      date: t("activites.2023-council.date"),
    },
    {
      key: "san-jose",
      value: t("activites.san-jose.title"),
      date: t("activites.san-jose.date"),
    },
    {
      key: "2022-council",
      value: t("activites.2022-council.title"),
      date: t("activites.2022-council.date"),
    },
    {
      key: "2021-council",
      value: t("activites.2021-council.title"),
      date: t("activites.2021-council.date"),
    },
  ];

  return activityData;
}
