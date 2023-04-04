import { Button } from '@mui/material';
import './page.scss';

const PageHeader = ({ title, onClickSave, onClickFetch, onClickAdd, onClickClose }) => (
  <div className="page-header">
    <div className="page-header-title">{title}</div>
    <div className="page-header-actions">
      {onClickSave && (
        <Button variant="contained" onClick={onClickSave}>
          Save
        </Button>
      )}
      {onClickFetch && (
        <Button variant="contained" onClick={onClickFetch}>
          Fetch{' '}
        </Button>
      )}
      {onClickAdd && (
        <Button variant="contained" onClick={onClickAdd}>
          Add
        </Button>
      )}
      {onClickClose && (
        <Button variant="contained" onClick={onClickClose}>
          Close
        </Button>
      )}
    </div>
  </div>
);

export default PageHeader;
