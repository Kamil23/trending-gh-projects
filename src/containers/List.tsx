import { ChangeEvent, FC } from "react";
import { ListProps } from "../interfaces";
import styled from 'styled-components';
import ListItem from "../components/ListItem";
import { SORT_BY_OPTIONS } from "../constants";
import { useDispatch } from "../redux/store";
import { sortList } from "../redux/slices/filters";

const ListFunctions = styled.div`
  margin: 16px 0;
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: flex-end;
`;

const SortWrapper = styled.div`
  font-size: 12px;
`;

const Select = styled.select`
  margin-left: 5px;
`;

const ListWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
 
const List: FC<ListProps> = (props: ListProps) => {
  const dispatch = useDispatch();
  const { data } = props;

  const sortByStars = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const type = e.target.value;
    dispatch(sortList({data, type}));
  };

  return (
    <>
      <ListFunctions>
        <SortWrapper>
          Sort by:<Select onChange={sortByStars}>
            <option disabled selected>Default</option>
            {SORT_BY_OPTIONS.map(({ name, value }) => 
              <option value={value}>{name}</option>)}
          </Select>
        </SortWrapper>
      </ListFunctions>
      <ListWrapper>
        {data.map(({ 
          author, 
          description, 
          language, 
          name, 
          stars, 
          url }) => 
          <ListItem 
            author={author}
            description={description}
            language={language}
            name={name}
            stars={stars}
            url={url} />)}
      </ListWrapper>
    </>
  )
}

export default List;