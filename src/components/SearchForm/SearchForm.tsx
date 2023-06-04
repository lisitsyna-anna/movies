import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { BsSearch } from 'react-icons/bs';
import { Form, Input, SearchBtn } from './SearchForm.styled';

interface ISearchFormProps {
  onSubmit: (value: string) => void;
  value: string;
}

const SearchForm: React.FC<ISearchFormProps> = ({ value, onSubmit }) => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      query: { value: string };
    };
    const queryValue = target.query.value;
    onSubmit(queryValue.toLowerCase().trim());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        defaultValue={value}
        placeholder="Enter the title of the movie"
      />
      <SearchBtn type="submit">
        {isTablet && 'Search'}
        <BsSearch />
      </SearchBtn>
    </Form>
  );
};

export default SearchForm;
