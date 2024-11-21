export type GetRecepiesResponse = {
  count: number;
  results: GetRecepiesData[];
};

export type GetRecepiesData = {
  cook_time_minutes: number;
  description: string;
  instructions: Instruction[];
  name: string;
  num_servings: number;
  prep_time_minutes: number;
  price: Price;
  thumbnail_url: string;
  total_time_minutes: number;
  user_ratings: UserRatings;
};

export type Instruction = {
  display_text: string;
};

export type Price = {
  total: number;
};

export type Ingredient = {
  created_at: number;
  display_plural: string;
  display_singular: string;
  id: number;
  name: string;
  updated_at: number;
};

export type UserRatings = {
  count_negative: number;
  count_positive: number;
  score: number;
};
