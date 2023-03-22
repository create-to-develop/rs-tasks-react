export type EmptyProps = {
  children?: React.ReactNode;
};

export interface SearchWordInterface {
  searchWord: string;
}

export interface SearchProps {
  callback: (searchWord: string) => void;
}
