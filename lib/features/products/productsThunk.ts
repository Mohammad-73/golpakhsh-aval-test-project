import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type requestResult = {
  taskId: string;
  page: number;
  pageSize: number;
};

type sendNewRequest = {
  isdn: string | null;
  date__lte: string;
  date__gte: string;
};

type ExportDataFormat = {
  prd_id: number;
  isdn: string;
  lac_id: number;
  cell_id: number;
  txn_prd_sno: string;
  site_address: string;
  province: string;
  city: string;
  times: string;
  re_name: string;
  import_date: number;
};

export const productsList = createAsyncThunk("data/requestList", async () => {
  try {
    const response = await axios.get(`/api`);
    return response;
  } catch (err) {
    console.error(err);
  }
});
