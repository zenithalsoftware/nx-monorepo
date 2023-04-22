import {
  DataGrid as MUIDataGrid,
  DataGridProps as MUIDataGridProps,
  GridColDef as MUIGridColDef,
  GridRowModel as MUIGridRowModel,
} from '@mui/x-data-grid';
import { GridValidRowModel } from '@mui/x-data-grid/models/gridRows';
import styled from 'styled-components';

export type GridColDef<
  R extends GridValidRowModel = any,
  V = any,
  F = V
> = MUIGridColDef<R, V, F>;

export type GridRowModel<R extends GridValidRowModel = GridValidRowModel> =
  MUIGridRowModel<R>;
export interface DataGridProps<R extends GridValidRowModel = any>
  extends MUIDataGridProps<R> {
  rows: ReadonlyArray<GridRowModel<R>>;
  columns: GridColDef<R, any, any>[];
}

const StyledDataGrid = styled.div`
  width: 100%;
`;

export function DataGrid(props: DataGridProps) {
  return (
    <StyledDataGrid>
      <MUIDataGrid {...props}></MUIDataGrid>
    </StyledDataGrid>
  );
}

export default DataGrid;
