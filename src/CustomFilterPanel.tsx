import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GridFilterPanel } from "@mui/x-data-grid-pro";
import { useTranslation } from "react-i18next";

interface CustomFilterPanelProps {
  customProp: string;
}

const CustomFilterPanel: React.FC<CustomFilterPanelProps> = ({
  customProp,
}) => {
  const { t } = useTranslation(["filter-panel"]);
  return (
    <>
      <Typography>{customProp}</Typography>
      <FilterPanelContent />
      <Button>{t("test")}</Button>
    </>
  );
};

export default CustomFilterPanel;

const FilterPanelContent = () => {
  const { t } = useTranslation(["filter-panel"]);
  return (
    <GridFilterPanel>
      {console.log("RENDERING!!")}
      <TextField label={t("filter1")} />
      <TextField label={t("filter2")} />
      <TextField label={t("filter3")} />
    </GridFilterPanel>
  );
};
