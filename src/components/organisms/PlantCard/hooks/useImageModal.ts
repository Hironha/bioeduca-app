import { useState } from "react";

type ImageModalController = {
  visible: boolean;
  imageURI: string | null;
  close(): void;
  open(uri: string): void;
};

const useImageModal = (): ImageModalController => {
  const [imageURI, setImageURI] = useState<string | null>(null);

  const open = (uri: string): void => setImageURI(uri);

  const close = (): void => setImageURI(null);

  return { visible: Boolean(imageURI), imageURI, open, close };
};

export { useImageModal, type ImageModalController };
