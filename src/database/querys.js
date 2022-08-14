export const querys = {
  TSP_LISTAR_TIPO_CAMBIO_WEB: "TSP_LISTAR_TIPO_CAMBIO_WEB",

  getBanco: "SELECT * FROM BANCO",
  tspListarBanco: "TSP_LISTAR_BANCO",
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
};
