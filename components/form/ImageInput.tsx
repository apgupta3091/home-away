import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function ImageInput() {
  const NAME = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={NAME} className="capitalize">
        Image
      </Label>
      <Input
        id={NAME}
        name={NAME}
        type="file"
        required
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
}

export default ImageInput;
