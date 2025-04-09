import React from "react";
import { Label } from "@/components/ui/label";
import { formattedCountries } from "@/utils/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NAME = "country";

function CountriesInput({ defaultValue }: Readonly<{ defaultValue?: string }>) {
  return (
    <div className="mb-2">
      <Label htmlFor={NAME} className="capitalize">
        country
      </Label>
      <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        name={NAME}
        required
      >
        <SelectTrigger id={NAME}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((item) => (
            <SelectItem key={item.code} value={item.code}>
              <span className="flex items-center gap-2">
                {item.flag} {item.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountriesInput;
