import { Box } from "./Box";

export const SearchBox = ({ onChange }) => {
  return (
    <Box>
      <input
        type="text"
        placeholder="Enter search name"
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
};
