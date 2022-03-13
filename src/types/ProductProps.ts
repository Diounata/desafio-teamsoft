interface IngredientsProps {
  group: string;
  max_items: number;
  type: number;
  itens: {
    id: number;
    nm_item: string;
    vl_item: number;
  }[];
}

interface ProductProps {
  id: string;
  createdAt: string;
  nm_product: string;
  description: string;
  vl_price: number;
  vl_discount: number;
  url_image: string;
  ingredients: IngredientsProps[];
}

export type { ProductProps };
