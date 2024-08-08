import { ContentRenderer } from '@ether/cms';
import './Button.scss';

export const Button = ({ pageName = 'init', blockName = 'loader' }) => {
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
