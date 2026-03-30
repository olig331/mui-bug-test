import { Badge, Button, Stack } from "@mui/material";
import {
  FilterPanelTrigger,
  Toolbar,
  ToolbarButton,
} from "@mui/x-data-grid-pro";
import { useTranslation } from "react-i18next";

const ToolbarFilterButton: React.FC<{ activeFilterCount: number }> = ({
  activeFilterCount,
}) => {
  const { t } = useTranslation(["other"]);
  return (
    <FilterPanelTrigger
      render={
        <Badge badgeContent={activeFilterCount} color="primary">
          <ToolbarButton
            render={<Button variant="outlined">{t("filters")}</Button>}
          />
        </Badge>
      }
    />
  );
};

const CustomToolbar: React.FC<{ activeFilterCount: number }> = ({
  activeFilterCount,
}) => {
  return (
    <Toolbar
      render={
        <Stack
          width="max-content"
          direction="row"
          paddingBlock="0.75rem"
          paddingInline="0.75rem"
        />
      }
    >
      <ToolbarFilterButton activeFilterCount={activeFilterCount} />
    </Toolbar>
  );
};

export default CustomToolbar;
