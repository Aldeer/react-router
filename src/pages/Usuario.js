import {useParams} from 'react-router-dom';
export default function Usuario() {

  const { id } =  useParams();
  return (
    <div>
      User {id}
    </div>
  )
}
