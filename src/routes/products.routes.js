import { Router } from "express";
import {
  getProducts,
  createNewProduct,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
  getBancos, LISTAR_TIPO_CAMBIO_WEB
} from "../controllers/products.controller";

const router = Router();

//Tipo Cambio
router.post("/TSP_LISTAR_TIPO_CAMBIO_WEB", LISTAR_TIPO_CAMBIO_WEB);

router.get("/banco", getBancos);

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
