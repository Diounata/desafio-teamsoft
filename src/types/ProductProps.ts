interface IngredientItemProps {
  id: number;
  nm_item: string;
  vl_item: number;
}

interface IngredientProps {
  group: string;
  max_itens: number;
  type: number;
  itens: IngredientItemProps[];
}

interface ProductProps {
  id: string;
  createdAt: string;
  nm_product: string;
  description: string;
  vl_price: number;
  vl_discount: number;
  url_image: string;
  ingredients: IngredientProps[];
}

export type { IngredientItemProps, ProductProps };
