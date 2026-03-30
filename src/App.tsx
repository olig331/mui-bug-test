import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ErrorBoundary } from "react-error-boundary";
import { type GridColDef } from "@mui/x-data-grid-pro";
import TypedDataGrid from "./TypedDataGrid";
import CustomFilterPanel from "./CustomFilterPanel";
import CustomToolbar from "./CustomToolbar";
import DirectionProvider from "./DirectionProvider";

function App() {
  const { t } = useTranslation(["main"]);
  const [myProp] = useState<string>("This is a test");

  const cols = useMemo(
    () => [
      { field: "test", headerName: t("test") } as GridColDef,
      { field: "test2", headerName: t("test2") } as GridColDef,
    ],
    [t],
  );

  return (
    <ErrorBoundary
      FallbackComponent={(props) => (
        <div>APP ERROR: {JSON.stringify(props)}</div>
      )}
      onReset={(args) => console.info({ args }, "error boundary reset")}
      onError={(err, info) =>
        console.error({ err, info }, "error boundary caught")
      }
    >
      <DirectionProvider>
        {/* My hacky workaround because you can't pass useCallback wrapped components as slots anymore, and module augmentation doesn't work at scale?? */}
        <TypedDataGrid
          rows={[]}
          rowCount={0}
          columns={cols}
          paginationMode="server"
          showToolbar
          slots={{ filterPanel: CustomFilterPanel, toolbar: CustomToolbar }}
          slotProps={{
            filterPanel: { customProp: myProp },
            toolbar: { activeFilterCount: 1 },
          }}
        />
      </DirectionProvider>
    </ErrorBoundary>
  );
}

export default App;
