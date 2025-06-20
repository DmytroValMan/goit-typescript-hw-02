export type Image = {
  id: string;
  description: string;
  urls: { small: string; regular: string };
  created_at: string;
  likes: number;
  user: { name: string };
};

export type SelectedImage = {
  description: string;
  url: string;
  created: string;
  likes: number;
  user: string;
};
