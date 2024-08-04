import { useFetchContentQuery } from '@ether/data-access';

export const ContentRenderer = ({ pageName = 'page', blockName = 'empty' }) => {
  // this needs to be fixed.
  const content = import.meta.env.VITE_CONTENT;
  const { data, error } = useFetchContentQuery(content);

  if (error) {
    console.log('Unable to return content');
    console.error(error);
  }

  const contentData = data?.data?.find(
    (item) => item.page_name === pageName && item.block_name === blockName
  );

  if (!contentData) return <p>No content found.</p>;

  return <div dangerouslySetInnerHTML={{ __html: contentData.content }} />;
};
