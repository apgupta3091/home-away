import React from "react";
import { Label } from "@/components/ui/label";
import { categories } from "@/utils/categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NAME = "category";

function CategoriesInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor={NAME} className="capitalize">
        Categories
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={NAME}
        required
      >
        <SelectTrigger id={NAME}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => {
            return (
              <SelectItem key={item.label} value={item.label}>
                <span className="flex items-center gap-2">
                  <item.icon /> {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoriesInput;
