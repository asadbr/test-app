import { apiService } from "@/services/apiService";

export const getProductsRequest = () => apiService.get("products");
