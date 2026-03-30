import type { ComponentType } from "react";
import Box from "@mui/material/Box";
import type { DataGridProProps } from "@mui/x-data-grid-pro";
import { DataGridPro } from "@mui/x-data-grid-pro";
import type { GridProSlotProps } from "node_modules/@mui/x-data-grid-pro/esm/models/gridProSlotProps";

type BaseSlots = NonNullable<DataGridProProps["slots"]>;
type BaseSlotProps = NonNullable<DataGridProProps["slotProps"]>;
type NoExtraProps = Record<string, never>;

type TSlotProps<T, FP, P, NR, BC> = Omit<
  GridProSlotProps,
  "toolbar" | "filterPanel" | "pagination" | "baseCheckbox" | "noRowsOverlay"
> & {
  toolbar?: BaseSlotProps["toolbar"] & T;
  filterPanel?: BaseSlotProps["filterPanel"] & FP;
  pagination?: BaseSlotProps["pagination"] & P;
  noRowsOverlay?: BaseSlotProps["noRowsOverlay"] & NR;
  baseCheckbox?: BaseSlotProps["baseCheckbox"] & BC;
};

type TSlots<T, FP, P, NR, BC> = Omit<
  BaseSlots,
  "toolbar" | "filterPanel" | "pagination" | "baseCheckbox" | "noRowsOverlay"
> & {
  toolbar?: ComponentType<GridProSlotProps["toolbar"] & T>;
  filterPanel?: ComponentType<GridProSlotProps["filterPanel"] & FP>;
  pagination?: ComponentType<GridProSlotProps["pagination"] & P>;
  noRowsOverlay?: ComponentType<GridProSlotProps["noRowsOverlay"] & NR>;
  baseCheckbox?: ComponentType<GridProSlotProps["baseCheckbox"] & BC>;
};

type TypedDataGridProps<
  T = NoExtraProps,
  FP = NoExtraProps,
  P = NoExtraProps,
  NR = NoRowsProps,
  BC = NoExtraProps,
> = Omit<DataGridProProps, "slotProps" | "slots"> & {
  slotProps?: TSlotProps<T, FP, P, NR, BC>;
  slots?: TSlots<T, FP, P, NR, BC>;
};

type NoRowsProps = {
  svg?: string;
  message?: string;
};

const TypedDataGrid = <
  T = NoExtraProps,
  FP = NoExtraProps,
  P = NoExtraProps,
  NR = NoRowsProps,
  BC = NoExtraProps,
>(
  props: TypedDataGridProps<T, FP, P, NR, BC>,
) => {
  const { slotProps, slots, ...dataGridProps } = props;

  return (
    <Box>
      <DataGridPro
        {...dataGridProps}
        slots={slots as never}
        slotProps={slotProps as never}
      />
    </Box>
  );
};

export default TypedDataGrid;
