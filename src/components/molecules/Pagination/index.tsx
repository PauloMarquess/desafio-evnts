import { useContext } from 'react';
import { CounterContext } from '../../../context';
import { BoxShadow } from '../../atoms/BoxShadow/style';
import { Button } from '../../atoms/Button';
import { ContainerPagination } from './style';

const Pagination = () => {
  const { gotoNextPage, gotoPrevPage,prevPageUrl } = useContext(CounterContext);
  
  return (
    <ContainerPagination>
      <BoxShadow >
        <Button  fullWidth children="Prev" disabled={prevPageUrl ===null && true}  onClick={gotoPrevPage} />
      </BoxShadow>
      <BoxShadow>
        {gotoPrevPage && <Button  fullWidth children="Next" onClick={gotoNextPage} />}
      </BoxShadow>
    </ContainerPagination>
  );
};

export default Pagination;
