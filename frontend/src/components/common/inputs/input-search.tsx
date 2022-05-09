import { FC, memo, useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Image from "next/image";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  defaultValue?: string;
};

const InputSearch: FC = ({ defaultValue = "" }: Props) => {
  const [value, setValue] = useState(defaultValue);

  const handleChangeDebounced = useDebouncedCallback((value: string) => {
    setValue(value);
  }, 300);

  return (
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <Image
          src={"/assets/images/search.svg"}
          width="20"
          height="20"
          priority
        />
      </InputRightElement>
      <Input
        type="text"
        placeholder="Search..."
        defaultValue={defaultValue}
        onChange={(e) => handleChangeDebounced(e.target.value)}
      />
    </InputGroup>
  );
};

export default memo(InputSearch);
