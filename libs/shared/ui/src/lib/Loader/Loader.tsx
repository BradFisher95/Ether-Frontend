import { ContentRenderer } from '@ether/cms';
import './Loader.scss';

export const Loader = ({ pageName = 'init', blockName = 'loader' }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <ContentRenderer
        pageName={pageName}
        blockName={blockName}
      ></ContentRenderer>
    </div>
  );
};
