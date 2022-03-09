import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface ItemInterface {
  key?: number;
  author: string | undefined;
  description: string;
  language: string;
  name: string;
  stars: number;
  url: string;
}

const ListItemWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  &:last-child {
    text-align: right;
  }
`;

const Link = styled.a`
  font-size: 18px;
  font-weight: 700;
`;

const Description = styled.span`
  font-size: 12px;
`;

const Lang = styled.div`
  font-size: 11px;
  font-style: italic;
`;

const Stars = styled.div`
  font-size: 14px;
`;

const ListItem: FC<ItemInterface> = (props: ItemInterface) => {
  const { author, description, language, name, stars, url } = props;
  return (
    <ListItemWrapper>
      <Column>
        <Link href={url}>{`${name} / ${author}`}</Link>
        <Description>{description}</Description>
      </Column>
      <Column>
        <Lang>{language}</Lang>
        <Stars>{`Stars: ${stars}`}</Stars>
      </Column>
    </ListItemWrapper>
  );
};

export default ListItem