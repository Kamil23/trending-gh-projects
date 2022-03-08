import { FC } from "react";

interface ListProps {
  readonly data: []
}
 
const List: FC<ListProps> = (props: ListProps) => {

  const { data } = props;
  console.log(data);

  return (
    <ul>
      {data.map((item: {author: string}) => <li>{item.author}</li>)}
    </ul>
  )
}

export default List;