const TruncatedExcerptPreview = ({ excerpt }: { excerpt: string }) => {
  const maxWords = 20; // Adjust this value to set the desired word limit

  const truncateExcerpt = (excerpt: string) => {
    const words = excerpt.trim().split(" ");

    if (words.length > maxWords) {
      const limitedExcerpt = words.slice(0, maxWords).join(" ");
      return `${limitedExcerpt}...`;
    }

    return excerpt;
  };

  const truncatedExcerpt = truncateExcerpt(excerpt);

  return <div dangerouslySetInnerHTML={{ __html: truncatedExcerpt }}></div>;
};

export default TruncatedExcerptPreview;
