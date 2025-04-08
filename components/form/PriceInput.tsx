import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { Prisma } from "@prisma/client";

// const name = Prisma.PropertyScalarFieldEnum.price;

type PriceInputProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: Readonly<PriceInputProps>) {
  const NAME = "price";
  return (
    <div className="mb-2">
      <Label htmlFor={NAME} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={NAME}
        type="number"
        name={NAME}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
