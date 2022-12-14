import { apiService } from "@/services/apiService";

export const getProductsRequest = () => apiService.get("products");

export const createProductRequest = (params) =>
  apiService.post(`products`, params);

export const deleteProductRequest = (id) => apiService.delete(`products/${id}`);
