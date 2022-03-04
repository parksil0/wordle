interface Props {
  href: string;
  width?: string;
  height?: string;
  title: string;
}

const index = ({ href, width, height, title }: Props) => {
  return (
    <svg width={width} height={height}>
      <title>{title}</title>
      <use xlinkHref={`${href}`} />
    </svg>
  );
};

export default index;
